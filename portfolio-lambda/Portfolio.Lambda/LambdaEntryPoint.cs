using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
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

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public APIGatewayProxyResponse SendEmail(APIGatewayProxyRequest apiRequest, ILambdaContext context) {
            var jsonSerializerSettings = GetDefaultJsonSettings();
            try {
                Console.WriteLine($"Processing SendEmail Request  RequestId={context.AwsRequestId}");
                var request = JsonConvert.DeserializeObject<Request>(apiRequest.Body, jsonSerializerSettings);
                
                var isValidEmail = IsValidEmail(request);
                if (isValidEmail) {
                    SendEmailInternal(request);
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
        
        private static void SendEmailInternal(Request request) {
            using (var client = new SmtpClient(Context.Host, Context.Port)) {
                client.Credentials = new NetworkCredential(Context.Username, Context.Password);
                client.EnableSsl = Context.EnableSsl;

                var body = $@"
Request From: {request.Name}
Email: {request.Email}
Message:
{request.Message}
";
                
                Console.WriteLine($"Message Information - {body}");
                
                var message = new MailMessage {
                    IsBodyHtml = false,
                    From = new MailAddress(Context.SenderEmail, Context.SenderName),
                    To = { new MailAddress(Context.SenderEmail) },
                    Subject = $"{Context.SubjectPrefix}{request.Name}",
                    Body = body
                };

                SetConfigurationSet(message, Context);
                
                Console.WriteLine("Sending email...");
                client.Send(message);
                Console.WriteLine("Sent email");
            }
        }

        private static void SetConfigurationSet(MailMessage mailMessage, Context context) {
            if (!string.IsNullOrEmpty(context.SesConfigurationSet)) {
                Console.WriteLine("Setting the X-SES-CONFIGURATION-SET header");
                mailMessage.Headers.Add("X-SES-CONFIGURATION-SET", context.SesConfigurationSet);
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
