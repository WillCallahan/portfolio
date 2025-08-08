using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests.Model
{
    public class RequestTests
    {
        [Fact]
        public void Request_CanSetAndGetName()
        {
            // Arrange
            var request = new Request();
            var expectedName = "John Doe";

            // Act
            request.Name = expectedName;

            // Assert
            Assert.Equal(expectedName, request.Name);
        }

        [Fact]
        public void Request_CanSetAndGetEmail()
        {
            // Arrange
            var request = new Request();
            var expectedEmail = "john@example.com";

            // Act
            request.Email = expectedEmail;

            // Assert
            Assert.Equal(expectedEmail, request.Email);
        }

        [Fact]
        public void Request_CanSetAndGetMessage()
        {
            // Arrange
            var request = new Request();
            var expectedMessage = "This is a test message";

            // Act
            request.Message = expectedMessage;

            // Assert
            Assert.Equal(expectedMessage, request.Message);
        }

        [Fact]
        public void Request_DefaultValuesAreNull()
        {
            // Arrange & Act
            var request = new Request();

            // Assert
            Assert.Null(request.Name);
            Assert.Null(request.Email);
            Assert.Null(request.Message);
        }

        [Fact]
        public void Request_CanBeInitializedWithAllProperties()
        {
            // Arrange
            var expectedName = "Jane Smith";
            var expectedEmail = "jane@example.com";
            var expectedMessage = "Hello, this is a test message";

            // Act
            var request = new Request
            {
                Name = expectedName,
                Email = expectedEmail,
                Message = expectedMessage
            };

            // Assert
            Assert.Equal(expectedName, request.Name);
            Assert.Equal(expectedEmail, request.Email);
            Assert.Equal(expectedMessage, request.Message);
        }
    }
}
