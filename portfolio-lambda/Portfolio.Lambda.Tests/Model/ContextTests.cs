using System;
using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests.Model
{
    public class ContextTests : IDisposable
    {
        public ContextTests()
        {
            // Clear environment variables before each test
            ClearEnvironmentVariables();
        }

        public void Dispose()
        {
            // Clean up after each test
            ClearEnvironmentVariables();
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
        public void Context_SenderEmail_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedEmail = "test@example.com";
            Environment.SetEnvironmentVariable("SenderEmail", expectedEmail);
            var context = new Context();

            // Act
            var result = context.SenderEmail;

            // Assert
            Assert.Equal(expectedEmail, result);
        }

        [Fact]
        public void Context_SenderName_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedName = "Test Sender";
            Environment.SetEnvironmentVariable("SenderName", expectedName);
            var context = new Context();

            // Act
            var result = context.SenderName;

            // Assert
            Assert.Equal(expectedName, result);
        }

        [Fact]
        public void Context_Username_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedUsername = "testuser";
            Environment.SetEnvironmentVariable("SenderUsername", expectedUsername);
            var context = new Context();

            // Act
            var result = context.Username;

            // Assert
            Assert.Equal(expectedUsername, result);
        }

        [Fact]
        public void Context_Password_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedPassword = "testpass";
            Environment.SetEnvironmentVariable("SenderPassword", expectedPassword);
            var context = new Context();

            // Act
            var result = context.Password;

            // Assert
            Assert.Equal(expectedPassword, result);
        }

        [Fact]
        public void Context_Host_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedHost = "smtp.example.com";
            Environment.SetEnvironmentVariable("SenderHost", expectedHost);
            var context = new Context();

            // Act
            var result = context.Host;

            // Assert
            Assert.Equal(expectedHost, result);
        }

        [Fact]
        public void Context_SubjectPrefix_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedPrefix = "[Portfolio] ";
            Environment.SetEnvironmentVariable("SubjectPrefix", expectedPrefix);
            var context = new Context();

            // Act
            var result = context.SubjectPrefix;

            // Assert
            Assert.Equal(expectedPrefix, result);
        }

        [Fact]
        public void Context_SesConfigurationSet_ReturnsEnvironmentVariable()
        {
            // Arrange
            var expectedConfigSet = "portfolio-config-set";
            Environment.SetEnvironmentVariable("SesConfigurationSet", expectedConfigSet);
            var context = new Context();

            // Act
            var result = context.SesConfigurationSet;

            // Assert
            Assert.Equal(expectedConfigSet, result);
        }

        [Theory]
        [InlineData("true", true)]
        [InlineData("false", false)]
        [InlineData("True", true)]
        [InlineData("False", false)]
        public void Context_EnableSsl_ParsesBooleanFromEnvironmentVariable(string envValue, bool expected)
        {
            // Arrange
            Environment.SetEnvironmentVariable("EnableSsl", envValue);
            var context = new Context();

            // Act
            var result = context.EnableSsl;

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Context_EnableSsl_ReturnsFalseWhenEnvironmentVariableIsEmpty()
        {
            // Arrange
            Environment.SetEnvironmentVariable("EnableSsl", "");
            var context = new Context();

            // Act
            var result = context.EnableSsl;

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void Context_EnableSsl_ReturnsFalseWhenEnvironmentVariableIsNull()
        {
            // Arrange
            Environment.SetEnvironmentVariable("EnableSsl", null);
            var context = new Context();

            // Act
            var result = context.EnableSsl;

            // Assert
            Assert.False(result);
        }

        [Theory]
        [InlineData("587", 587)]
        [InlineData("25", 25)]
        [InlineData("465", 465)]
        public void Context_Port_ParsesIntFromEnvironmentVariable(string envValue, int expected)
        {
            // Arrange
            Environment.SetEnvironmentVariable("Port", envValue);
            var context = new Context();

            // Act
            var result = context.Port;

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Context_Port_ReturnsDefault587WhenEnvironmentVariableIsEmpty()
        {
            // Arrange
            Environment.SetEnvironmentVariable("Port", "");
            var context = new Context();

            // Act
            var result = context.Port;

            // Assert
            Assert.Equal(587, result);
        }

        [Fact]
        public void Context_Port_ReturnsDefault587WhenEnvironmentVariableIsNull()
        {
            // Arrange
            Environment.SetEnvironmentVariable("Port", null);
            var context = new Context();

            // Act
            var result = context.Port;

            // Assert
            Assert.Equal(587, result);
        }
    }
}
