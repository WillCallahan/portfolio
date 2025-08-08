using Portfolio.Lambda.Model;
using Xunit;

namespace Portfolio.Lambda.Tests.Model
{
    public class ResponseTests
    {
        [Fact]
        public void Response_ConstructorSetsIsSuccessToTrue()
        {
            // Arrange & Act
            var response = new Response(true);

            // Assert
            Assert.True(response.IsSuccess);
        }

        [Fact]
        public void Response_ConstructorSetsIsSuccessToFalse()
        {
            // Arrange & Act
            var response = new Response(false);

            // Assert
            Assert.False(response.IsSuccess);
        }

        [Fact]
        public void Response_IsSuccessCanBeModified()
        {
            // Arrange
            var response = new Response(true);

            // Act
            response.IsSuccess = false;

            // Assert
            Assert.False(response.IsSuccess);
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void Response_ConstructorWorksWithBothBooleanValues(bool isSuccess)
        {
            // Arrange & Act
            var response = new Response(isSuccess);

            // Assert
            Assert.Equal(isSuccess, response.IsSuccess);
        }
    }
}
