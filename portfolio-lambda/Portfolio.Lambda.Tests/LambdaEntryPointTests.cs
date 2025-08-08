using System;
using System.Collections.Generic;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.TestUtilities;
using Moq;
using Newtonsoft.Json;
using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests
{
    public class LambdaEntryPointTests
    {
        private readonly Mock<IEmailService> _mockEmailService;
        private readonly LambdaEntryPoint _lambdaEntryPoint;
        private readonly TestLambdaContext _context;

        public LambdaEntryPointTests()
        {
            _mockEmailService = new Mock<IEmailService>();
            _lambdaEntryPoint = new LambdaEntryPoint(_mockEmailService.Object);
            _context = new TestLambdaContext();
            
            // Set up environment variables for testing
            Environment.SetEnvironmentVariable("SenderEmail", "test@example.com");
            Environment.SetEnvironmentVariable("SenderName", "Test Sender");
            Environment.SetEnvironmentVariable("SenderUsername", "testuser");
            Environment.SetEnvironmentVariable("SenderPassword", "testpass");
            Environment.SetEnvironmentVariable("SenderHost", "smtp.example.com");
            Environment.SetEnvironmentVariable("SubjectPrefix", "[Portfolio] ");
            Environment.SetEnvironmentVariable("EnableSsl", "true");
            Environment.SetEnvironmentVariable("Port", "587");
        }

        [Fact]
        public void SendEmail_WithValidRequest_ReturnsSuccessResponse()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "This is a test message with more than five words"
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(200, response.StatusCode);
            Assert.Contains("Access-Control-Allow-Origin", response.Headers);
            Assert.Equal("*", response.Headers["Access-Control-Allow-Origin"]);
            
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.True(responseBody.IsSuccess);
            
            // Verify email service was called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Once);
        }

        [Fact]
        public void SendEmail_WithShortMessage_ReturnsSuccessButDoesNotSend()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "Short" // Less than 5 words
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(200, response.StatusCode);
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.True(responseBody.IsSuccess); // Still returns success but doesn't send
            
            // Verify email service was NOT called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
        }

        [Fact]
        public void SendEmail_WithNullRequest_ReturnsErrorResponse()
        {
            // Arrange
            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(null)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(500, response.StatusCode); // Returns error because null can't be deserialized properly
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.False(responseBody.IsSuccess);
            
            // Verify email service was NOT called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
        }

        [Fact]
        public void SendEmail_WithInvalidJson_ReturnsErrorResponse()
        {
            // Arrange
            var apiRequest = new APIGatewayProxyRequest
            {
                Body = "invalid json"
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(500, response.StatusCode);
            Assert.Contains("Access-Control-Allow-Origin", response.Headers);
            
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.False(responseBody.IsSuccess);
            
            // Verify email service was NOT called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
        }

        [Fact]
        public void SendEmail_WithEmptyBody_ReturnsErrorResponse()
        {
            // Arrange
            var apiRequest = new APIGatewayProxyRequest
            {
                Body = ""
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(500, response.StatusCode);
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.False(responseBody.IsSuccess);
            
            // Verify email service was NOT called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
        }

        [Fact]
        public void SendEmail_ResponseHasCorsHeaders()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "This is a test message with enough words"
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Contains("Access-Control-Allow-Origin", response.Headers);
            Assert.Contains("Access-Control-Allow-Methods", response.Headers);
            Assert.Contains("Access-Control-Allow-Headers", response.Headers);
            
            Assert.Equal("*", response.Headers["Access-Control-Allow-Origin"]);
            Assert.Equal("OPTIONS, POST", response.Headers["Access-Control-Allow-Methods"]);
            Assert.Equal("*", response.Headers["Access-Control-Allow-Headers"]);
        }

        [Theory]
        [InlineData("", "john@example.com", "This is a test message")]
        [InlineData("John", "", "This is a test message")]
        [InlineData("John", "john@example.com", "")]
        public void SendEmail_WithMissingFields_StillReturnsSuccess(string name, string email, string message)
        {
            // Arrange
            var request = new Request
            {
                Name = name,
                Email = email,
                Message = message
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(200, response.StatusCode);
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.True(responseBody.IsSuccess);
            
            // Verify email service was NOT called for empty message (fails validation)
            if (string.IsNullOrEmpty(message))
            {
                _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
            }
            else
            {
                _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Once);
            }
        }

        [Fact]
        public void SendEmail_WhenEmailServiceThrows_ReturnsErrorResponse()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john@example.com",
                Message = "This is a test message with enough words"
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            _mockEmailService.Setup(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()))
                           .Throws(new Exception("SMTP server error"));

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(500, response.StatusCode);
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.False(responseBody.IsSuccess);
        }
    }
}
