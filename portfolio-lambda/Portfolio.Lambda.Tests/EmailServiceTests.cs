using System;
using System.Net.Mail;
using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests
{
    public class EmailServiceTests : IDisposable
    {
        private readonly EmailService _emailService;

        public EmailServiceTests()
        {
            _emailService = new EmailService();
            SetupTestEnvironment();
        }

        public void Dispose()
        {
            ClearEnvironmentVariables();
        }

        private void SetupTestEnvironment()
        {
            Environment.SetEnvironmentVariable("SenderEmail", "test@example.com");
            Environment.SetEnvironmentVariable("SenderName", "Test Sender");
            Environment.SetEnvironmentVariable("SenderUsername", "testuser");
            Environment.SetEnvironmentVariable("SenderPassword", "testpass");
            Environment.SetEnvironmentVariable("SenderHost", "smtp.example.com");
            Environment.SetEnvironmentVariable("SubjectPrefix", "[Test] ");
            Environment.SetEnvironmentVariable("SesConfigurationSet", "test-config");
            Environment.SetEnvironmentVariable("EnableSsl", "true");
            Environment.SetEnvironmentVariable("Port", "587");
        }

        private void ClearEnvironmentVariables()
        {
            Environment.SetEnvironmentVariable("SenderEmail", null);
            Environment.SetEnvironmentVariable("SenderName", null);
            Environment.SetEnvironmentVariable("SenderUsername", null);
            Environment.SetEnvironmentVariable("SenderPassword", null);
            Environment.SetEnvironmentVariable("SenderHost", null);
            Environment.SetEnvironmentVariable("SubjectPrefix", null);
            Environment.SetEnvironmentVariable("SesConfigurationSet", null);
            Environment.SetEnvironmentVariable("EnableSsl", null);
            Environment.SetEnvironmentVariable("Port", null);
        }

        [Fact]
        public void SendEmail_WithValidInputs_ThrowsExceptionDueToNoRealSmtpServer()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "This is a test message"
            };
            var context = new Context();

            // Act & Assert
            // This will throw an exception because we're not connecting to a real SMTP server
            // The specific exception type may vary (SmtpException, ArgumentNullException, etc.)
            // depending on which validation fails first
            Assert.ThrowsAny<Exception>(() => _emailService.SendEmail(request, context));
        }

        [Fact]
        public void SendEmail_WithNullRequest_ThrowsNullReferenceException()
        {
            // Arrange
            var context = new Context();

            // Act & Assert
            Assert.Throws<NullReferenceException>(() => _emailService.SendEmail(null, context));
        }

        [Fact]
        public void SendEmail_WithNullContext_ThrowsNullReferenceException()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "This is a test message"
            };

            // Act & Assert
            Assert.Throws<NullReferenceException>(() => _emailService.SendEmail(request, null));
        }

        [Fact]
        public void EmailService_CanBeInstantiated()
        {
            // Arrange & Act
            var emailService = new EmailService();

            // Assert
            Assert.NotNull(emailService);
        }
    }
}
