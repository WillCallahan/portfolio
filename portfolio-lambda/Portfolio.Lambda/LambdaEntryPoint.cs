using System;
using System.Net;
using System.Net.Mail;
using Amazon.Lambda.Core;
using Portfolio.Lambda.Model;

namespace Portfolio.Lambda
{
    public class LambdaEntryPoint
    {
        private static readonly Context Context = new Context();

        [LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]
        public Response SendEmail(Request request, ILambdaContext context) {
            try {
                Console.WriteLine($"Processing SendEmail Request  RequestId={context.AwsRequestId}");
                SendEmailInternal(request);
                return new Response(true);
            }
            catch (Exception e) {
                Console.WriteLine("Failed to process request");
                Console.WriteLine(e.StackTrace);
                return new Response(false);
            }
        }
        
        private static void SendEmailInternal(Request request) {
            using (var client = new SmtpClient(Context.Host, Context.Port)) {
                client.Credentials = new NetworkCredential(Context.Username, Context.Password);
                client.EnableSsl = Context.EnableSsl;
                
                var message = new MailMessage {
                    IsBodyHtml = false,
                    From = new MailAddress(Context.SenderEmail, Context.SenderName),
                    To = { new MailAddress(request.Email) },
                    Bcc = { new MailAddress(Context.SenderEmail) },
                    Subject = $"{Context.SubjectPrefix}{request.Name}",
                    Body = $@"
Request From: {request.Name}
Email: {request.Email}
Message:
{request.Message}
"
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
