using System;
using Portfolio.Lambda;
using Portfolio.Lambda.Model;

namespace Portfolio.Console
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Environment.SetEnvironmentVariable("Sender.Email", "VALUE");
            Environment.SetEnvironmentVariable("Sender.Name", "VALUE");
            Environment.SetEnvironmentVariable("Sender.Username", "VALUE");
            Environment.SetEnvironmentVariable("Sender.Password", "VALUE");
            Environment.SetEnvironmentVariable("Sender.Host", "email-smtp.us-east-1.amazonaws.com");
            Environment.SetEnvironmentVariable("SubjectPrefix", "TEST EMAIL - ");
//            Environment.SetEnvironmentVariable("SesConfigurationSet", "ConfigurationSet");
            Environment.SetEnvironmentVariable("EnableSsl", "true");
            Environment.SetEnvironmentVariable("Port", "587");

            var lambdaEntryPoint = new LambdaEntryPoint();
            var request = new Request {
                Email = "VALUE",
                Message = $"Test {DateTime.Now}",
                Name = "John Doe"
            };

            lambdaEntryPoint.SendEmail(request, new TestLambdaContext());
        }
    }
}
