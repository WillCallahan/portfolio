using System;
using System.Net;
using System.Net.Mail;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;
using Portfolio.Lambda.Model;

namespace Portfolio.Lambda
{
    public class LambdaEntryPoint
    {
        private static readonly Context Context = new Context();

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public APIGatewayProxyResponse SendEmail(APIGatewayProxyRequest apiRequest, ILambdaContext context) {
            try {
                Console.WriteLine($"Processing SendEmail Request  RequestId={context.AwsRequestId}");
                var request = JsonConvert.DeserializeObject<Request>(apiRequest.Body);
                SendEmailInternal(request);
                var response = new Response(true);
                var apiResponse = new APIGatewayProxyResponse {
                    Body = JsonConvert.SerializeObject(response),
                    IsBase64Encoded = false,
                    StatusCode = 200
                };
                return apiResponse;
            }
            catch (Exception e) {
                Console.WriteLine("Failed to process request");
                Console.WriteLine(e.StackTrace);
                var response = new Response(false);
                var apiResponse = new APIGatewayProxyResponse {
                    Body = JsonConvert.SerializeObject(response),
                    IsBase64Encoded = false,
                    StatusCode = 500
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
                    To = { new MailAddress(request.Email) },
                    Bcc = { new MailAddress(Context.SenderEmail) },
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
    }
}
