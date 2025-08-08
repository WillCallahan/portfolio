using System;
using System.Net;
using System.Net.Mail;
using Portfolio.Lambda.Model;

namespace Portfolio.Lambda
{
    public class EmailService : IEmailService
    {
        public void SendEmail(Request request, Context context)
        {
            using (var client = new SmtpClient(context.Host, context.Port))
            {
                client.Credentials = new NetworkCredential(context.Username, context.Password);
                client.EnableSsl = context.EnableSsl;

                var body = $@"
Request From: {request.Name}
Email: {request.Email}
Message:
{request.Message}
";
                
                Console.WriteLine($"Message Information - {body}");
                
                var message = new MailMessage
                {
                    IsBodyHtml = false,
                    From = new MailAddress(context.SenderEmail, context.SenderName),
                    To = { new MailAddress(context.SenderEmail) },
                    Subject = $"{context.SubjectPrefix}{request.Name}",
                    Body = body
                };

                SetConfigurationSet(message, context);
                
                Console.WriteLine("Sending email...");
                client.Send(message);
                Console.WriteLine("Sent email");
            }
        }

        private static void SetConfigurationSet(MailMessage mailMessage, Context context)
        {
            if (!string.IsNullOrEmpty(context.SesConfigurationSet))
            {
                Console.WriteLine("Setting the X-SES-CONFIGURATION-SET header");
                mailMessage.Headers.Add("X-SES-CONFIGURATION-SET", context.SesConfigurationSet);
            }
        }
    }
}
