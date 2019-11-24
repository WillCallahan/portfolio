using System;

namespace Portfolio.Lambda.Model {
    public class Context {
        public string SenderEmail => Environment.GetEnvironmentVariable("Sender.Email");

        public string SenderName => Environment.GetEnvironmentVariable("Sender.Name");

        public string Username => Environment.GetEnvironmentVariable("Sender.Username");

        public string Password => Environment.GetEnvironmentVariable("Sender.Password");

        public string Host => Environment.GetEnvironmentVariable("Sender.Host");

        public string SubjectPrefix => Environment.GetEnvironmentVariable("SubjectPrefix");

        public string SesConfigurationSet => Environment.GetEnvironmentVariable("SesConfigurationSet");

        public bool EnableSsl {
            get {
                var envEnableSsl = Environment.GetEnvironmentVariable("EnableSsl");
                return !string.IsNullOrEmpty(envEnableSsl) && bool.Parse(envEnableSsl);
            }
        }

        public int Port {
            get {
                var envPort = Environment.GetEnvironmentVariable("Port");
                return string.IsNullOrEmpty(envPort) ? 587 : int.Parse(envPort);
            }
        }
    }
}