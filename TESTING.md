# Portfolio Testing Guide

This document provides comprehensive information about the testing setup and practices for the Portfolio application.

## Overview

The Portfolio application includes comprehensive unit tests for both the frontend (React) and backend (C# Lambda) components:

- **Frontend Tests**: React components, utilities, and API repositories using Vitest and React Testing Library
- **Backend Tests**: C# Lambda function, models, and integration tests using xUnit

## Frontend Testing (React/JavaScript)

### Test Framework Stack
- **Vitest**: Fast unit test framework for Vite projects
- **React Testing Library**: Testing utilities for React components
- **Jest DOM**: Custom Jest matchers for DOM elements
- **User Event**: Utilities for simulating user interactions

### Running Frontend Tests

```bash
cd portfolio-web

# Install dependencies
npm install

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm test -- --watch
```

### Frontend Test Structure

```
portfolio-web/src/
├── test/
│   └── setup.js                    # Test configuration and mocks
├── portfolio/
│   ├── __tests__/                  # Component tests
│   │   ├── Contact.test.jsx
│   │   ├── Navigation.test.jsx
│   │   ├── Profile.test.jsx
│   │   ├── Stats.test.jsx
│   │   └── Loader.test.jsx
│   ├── repository/
│   │   └── __tests__/              # Repository tests
│   │       ├── ApiRepository.test.js
│   │       └── ContactRepository.test.js
│   └── utility/
│       └── __tests__/              # Utility tests
│           └── ArrayUtility.test.js
└── App.test.jsx                    # Main app test
```

### Frontend Test Coverage

The frontend tests cover:

- **Component Rendering**: Ensures components render without errors
- **User Interactions**: Form submissions, button clicks, navigation
- **API Integration**: Mocked API calls and error handling
- **Validation Logic**: Form validation and error messages
- **Utility Functions**: Array manipulation and helper functions
- **Accessibility**: ARIA attributes and screen reader compatibility

### Example Frontend Test

```javascript
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'

describe('Contact Component', () => {
  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
  })
})
```

## Backend Testing (C# Lambda)

### Test Framework Stack
- **xUnit**: Unit testing framework for .NET
- **Moq**: Mocking framework for .NET
- **Amazon.Lambda.TestUtilities**: AWS Lambda testing utilities
- **Coverlet**: Code coverage analysis

### Running Backend Tests

```bash
cd portfolio-lambda

# Restore dependencies
dotnet restore

# Run all tests
dotnet test

# Run tests with coverage
dotnet test --collect:"XPlat Code Coverage"

# Run specific test project
dotnet test Portfolio.Lambda.Tests/

# Run tests with detailed output
dotnet test --logger "console;verbosity=detailed"
```

### Backend Test Structure

```
portfolio-lambda/
├── Portfolio.Lambda.Tests/
│   ├── LambdaEntryPointTests.cs    # Main Lambda function tests
│   ├── Model/                      # Model tests
│   │   ├── RequestTests.cs
│   │   ├── ResponseTests.cs
│   │   └── ContextTests.cs
│   └── Integration/                # Integration tests
│       └── LambdaIntegrationTests.cs
└── Portfolio.Lambda/               # Source code
```

### Backend Test Coverage

The backend tests cover:

- **Lambda Function Logic**: Email sending, validation, error handling
- **Model Classes**: Property getters/setters, constructors
- **Environment Configuration**: Environment variable parsing
- **API Gateway Integration**: Request/response handling
- **CORS Headers**: Cross-origin resource sharing
- **Error Scenarios**: Invalid JSON, missing data, exceptions
- **Integration Tests**: End-to-end Lambda execution

### Example Backend Test

```csharp
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
    var responseBody = JsonConvert.DeserializeObject<Response>(response.Body);
    Assert.True(responseBody.IsSuccess);
}
```

## Test Configuration

### Frontend Configuration (vitest.config.js)

```javascript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.config.js']
    }
  },
})
```

### Backend Configuration (Portfolio.Lambda.Tests.csproj)

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <IsTestProject>true</IsTestProject>
  </PropertyGroup>
  
  <ItemGroup>
    <PackageReference Include="xunit" Version="2.6.1" />
    <PackageReference Include="Amazon.Lambda.TestUtilities" Version="2.0.0" />
    <PackageReference Include="Moq" Version="4.20.69" />
  </ItemGroup>
</Project>
```

## Continuous Integration

### GitHub Actions Workflow

```yaml
name: Tests
on: [push, pull_request]

jobs:
  frontend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd portfolio-web && npm ci
      - run: cd portfolio-web && npm test
      - run: cd portfolio-web && npm run test:coverage

  backend-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0'
      - run: cd portfolio-lambda && dotnet restore
      - run: cd portfolio-lambda && dotnet test --collect:"XPlat Code Coverage"
```

## Test Best Practices

### Frontend Best Practices

1. **Test User Behavior**: Focus on what users do, not implementation details
2. **Use Semantic Queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
3. **Mock External Dependencies**: Mock API calls, third-party libraries
4. **Test Accessibility**: Ensure components work with screen readers
5. **Async Testing**: Use `waitFor` for asynchronous operations

### Backend Best Practices

1. **Arrange-Act-Assert**: Structure tests clearly with AAA pattern
2. **Test Edge Cases**: Null values, empty strings, invalid data
3. **Environment Isolation**: Clean up environment variables between tests
4. **Integration Testing**: Test complete request/response cycles
5. **Error Scenarios**: Test exception handling and error responses

## Coverage Goals

- **Frontend**: Aim for >80% code coverage
- **Backend**: Aim for >90% code coverage
- **Critical Paths**: 100% coverage for core business logic

## Running All Tests

To run the complete test suite:

```bash
# Frontend tests
cd portfolio-web && npm test

# Backend tests
cd ../portfolio-lambda && dotnet test

# Or use the provided script
./run-all-tests.sh
```

## Troubleshooting

### Common Frontend Issues

- **Module not found**: Ensure all dependencies are installed with `npm install`
- **Test timeouts**: Increase timeout for slow async operations
- **Mock issues**: Verify mocks are properly configured in setup files

### Common Backend Issues

- **Environment variables**: Ensure test environment variables are set
- **Package restore**: Run `dotnet restore` if packages are missing
- **Lambda context**: Use `TestLambdaContext` for Lambda function tests

## Contributing

When adding new features:

1. Write tests first (TDD approach)
2. Ensure all existing tests pass
3. Add tests for new functionality
4. Update this documentation if needed
5. Verify coverage meets project standards

For questions about testing, please refer to the project maintainers or create an issue in the repository.
