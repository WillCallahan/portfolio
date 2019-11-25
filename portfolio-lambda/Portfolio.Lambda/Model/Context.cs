using System;

namespace Portfolio.Lambda.Model {
    public class Context {
        public string SenderEmail => Environment.GetEnvironmentVariable("SenderEmail");

        public string SenderName => Environment.GetEnvironmentVariable("SenderName");

        public string Username => Environment.GetEnvironmentVariable("SenderUsername");

        public string Password => Environment.GetEnvironmentVariable("SenderPassword");

        public string Host => Environment.GetEnvironmentVariable("SenderHost");

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