using System;
using System.Collections.Generic;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.TestUtilities;
using Moq;
using Newtonsoft.Json;
using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests.Integration
{
    public class LambdaIntegrationTests
    {
        private readonly Mock<IEmailService> _mockEmailService;
        private readonly LambdaEntryPoint _lambdaEntryPoint;
        private readonly TestLambdaContext _context;

        public LambdaIntegrationTests()
        {
            _mockEmailService = new Mock<IEmailService>();
            _lambdaEntryPoint = new LambdaEntryPoint(_mockEmailService.Object);
            _context = new TestLambdaContext
            {
                FunctionName = "Portfolio-SendEmail",
                FunctionVersion = "1.0",
                MemoryLimitInMB = 256,
                RemainingTime = TimeSpan.FromSeconds(30)
            };

            // Set up test environment variables
            SetupTestEnvironment();
        }

        private void SetupTestEnvironment()
        {
            Environment.SetEnvironmentVariable("SenderEmail", "portfolio@example.com");
            Environment.SetEnvironmentVariable("SenderName", "Portfolio Contact");
            Environment.SetEnvironmentVariable("SenderUsername", "portfolio_user");
            Environment.SetEnvironmentVariable("SenderPassword", "test_password");
            Environment.SetEnvironmentVariable("SenderHost", "smtp.example.com");
            Environment.SetEnvironmentVariable("SubjectPrefix", "[Portfolio Contact] ");
            Environment.SetEnvironmentVariable("SesConfigurationSet", "portfolio-config");
            Environment.SetEnvironmentVariable("EnableSsl", "true");
            Environment.SetEnvironmentVariable("Port", "587");
        }

        [Fact]
        public void SendEmail_EndToEndTest_WithValidRequest()
        {
            // Arrange
            var request = new Request
            {
                Name = "John Doe",
                Email = "john.doe@example.com",
                Message = "Hello, I am interested in discussing a potential project opportunity with you."
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request),
                Headers = new Dictionary<string, string>
                {
                    { "Content-Type", "application/json" },
                    { "Origin", "https://williamcallahan.com" }
                },
                HttpMethod = "POST",
                Path = "/contact",
                RequestContext = new APIGatewayProxyRequest.ProxyRequestContext
                {
                    RequestId = Guid.NewGuid().ToString(),
                    Stage = "prod"
                }
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.NotNull(response);
            Assert.Equal(200, response.StatusCode);
            Assert.False(response.IsBase64Encoded);
            
            // Verify CORS headers
            Assert.True(response.Headers.ContainsKey("Access-Control-Allow-Origin"));
            Assert.Equal("*", response.Headers["Access-Control-Allow-Origin"]);
            
            // Verify response body
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.NotNull(responseBody);
            Assert.True(responseBody.IsSuccess);
            
            // Verify email service was called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Once);
        }

        [Fact]
        public void SendEmail_EndToEndTest_WithSpamLikeMessage()
        {
            // Arrange - Short message that would be flagged as spam
            var request = new Request
            {
                Name = "Spammer",
                Email = "spam@spam.com",
                Message = "Buy now!" // Less than 5 words
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request),
                Headers = new Dictionary<string, string>
                {
                    { "Content-Type", "application/json" }
                },
                HttpMethod = "POST",
                Path = "/contact"
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(200, response.StatusCode); // Still returns 200 but doesn't send email
            
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.True(responseBody.IsSuccess); // Returns success but email is not sent
            
            // Verify email service was NOT called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Never);
        }

        [Fact]
        public void SendEmail_EndToEndTest_WithMalformedJson()
        {
            // Arrange
            var apiRequest = new APIGatewayProxyRequest
            {
                Body = "{ invalid json }",
                Headers = new Dictionary<string, string>
                {
                    { "Content-Type", "application/json" }
                },
                HttpMethod = "POST",
                Path = "/contact"
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
        public void SendEmail_EndToEndTest_VerifyResponseFormat()
        {
            // Arrange
            var request = new Request
            {
                Name = "Test User",
                Email = "test@example.com",
                Message = "This is a test message with sufficient length to pass validation"
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.NotNull(response.Body);
            Assert.True(IsValidJson(response.Body));
            
            // Verify the response can be deserialized
            var responseObject = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.NotNull(responseObject);
            Assert.True(responseObject.IsSuccess);
            
            // Verify email service was called
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Once);
        }

        [Theory]
        [InlineData("")]
        [InlineData(null)]
        [InlineData("   ")]
        public void SendEmail_EndToEndTest_WithEmptyOrNullBody(string body)
        {
            // Arrange
            var apiRequest = new APIGatewayProxyRequest
            {
                Body = body
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
        public void SendEmail_EndToEndTest_WithEmailServiceException()
        {
            // Arrange
            var request = new Request
            {
                Name = "Test User",
                Email = "test@example.com",
                Message = "This is a test message with sufficient length to pass validation"
            };

            var apiRequest = new APIGatewayProxyRequest
            {
                Body = JsonConvert.SerializeObject(request)
            };

            _mockEmailService.Setup(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()))
                           .Throws(new Exception("SMTP connection failed"));

            // Act
            var response = _lambdaEntryPoint.SendEmail(apiRequest, _context);

            // Assert
            Assert.Equal(500, response.StatusCode);
            
            var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
            Assert.False(responseBody.IsSuccess);
            
            // Verify email service was called but threw exception
            _mockEmailService.Verify(x => x.SendEmail(It.IsAny<Request>(), It.IsAny<Context>()), Times.Once);
        }

        private bool IsValidJson(string jsonString)
        {
            try
            {
                JsonConvert.DeserializeObject(jsonString);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
