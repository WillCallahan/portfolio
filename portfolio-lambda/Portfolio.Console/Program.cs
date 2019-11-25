using System;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using Portfolio.Lambda;
using Portfolio.Lambda.Model;

namespace Portfolio.Console
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Environment.SetEnvironmentVariable("SenderEmail", "VALUE");
            Environment.SetEnvironmentVariable("SenderName", "VALUE");
            Environment.SetEnvironmentVariable("SenderUsername", "VALUE");
            Environment.SetEnvironmentVariable("SenderPassword", "VALUE");
            Environment.SetEnvironmentVariable("SenderHost", "email-smtp.us-east-1.amazonaws.com");
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

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            lambdaEntryPoint.SendEmail(apiRequest, new TestLambdaContext());
        }
    }
}
