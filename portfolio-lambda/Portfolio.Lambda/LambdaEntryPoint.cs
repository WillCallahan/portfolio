using System;
using System.Collections.Generic;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Portfolio.Lambda.Model;

namespace Portfolio.Lambda
{
    public class LambdaEntryPoint
    {
        private const int MinimumWords = 5;
        
        private static readonly Context Context = new Context();
        private readonly IEmailService _emailService;

        public LambdaEntryPoint() : this(new EmailService())
        {
        }

        public LambdaEntryPoint(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public APIGatewayProxyResponse SendEmail(APIGatewayProxyRequest apiRequest, ILambdaContext context) {
            var jsonSerializerSettings = GetDefaultJsonSettings();
            try {
                Console.WriteLine($"Processing SendEmail Request  RequestId={context.AwsRequestId}");
                var request = JsonConvert.DeserializeObject<Request>(apiRequest.Body, jsonSerializerSettings);
                
                var isValidEmail = IsValidEmail(request);
                if (isValidEmail) {
                    _emailService.SendEmail(request, Context);
                }
                else {
                    Console.WriteLine($"Refusing to send email; message is likely spam.  Name={request.Name} Email={request.Email} Message={request.Message}");
                }
                
                var response = new Response(true);
                var apiResponse = new APIGatewayProxyResponse {
                    Body = JsonConvert.SerializeObject(response, jsonSerializerSettings),
                    IsBase64Encoded = false,
                    StatusCode = 200,
                    Headers = new Dictionary<string, string>  {
                        { "Access-Control-Allow-Origin", "*" },
                        { "Access-Control-Allow-Methods", "OPTIONS, POST" },
                        { "Access-Control-Allow-Headers", "*" },
                    }
                };
                return apiResponse;
            }
            catch (Exception e) {
                Console.WriteLine("Failed to process request");
                Console.WriteLine(e.StackTrace);
                var response = new Response(false);
                var apiResponse = new APIGatewayProxyResponse {
                    Body = JsonConvert.SerializeObject(response, jsonSerializerSettings),
                    IsBase64Encoded = false,
                    StatusCode = 500,
                    Headers = new Dictionary<string, string> {
                        { "Access-Control-Allow-Origin", "*" },
                        { "Access-Control-Allow-Methods", "OPTIONS, POST" },
                        { "Access-Control-Allow-Headers", "*" },
                    }
                };
                return apiResponse;
            }
        }

        private static JsonSerializerSettings GetDefaultJsonSettings() {
            var contractResolver = new DefaultContractResolver {
                NamingStrategy = new CamelCaseNamingStrategy()
            };
            
            var jsonSerializerSettings = new JsonSerializerSettings {
                ContractResolver = contractResolver,
                Formatting = Formatting.None
            };

            return jsonSerializerSettings;
        }

        private bool IsValidEmail(Request request) {
            if (request == null) {
                return false;
            }
            
            var words = request.Message.Trim().Split(" ").Length;
            if (words < MinimumWords) {
                return false;
            }

            return true;
        }
    }
}
