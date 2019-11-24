using System;
using Amazon.Lambda.Core;

namespace Portfolio.Console {
    public class TestLambdaContext : ILambdaContext {
        public string AwsRequestId => Guid.NewGuid().ToString();
        public IClientContext ClientContext { get; }
        public string FunctionName => "portfolio";
        public string FunctionVersion { get; }
        public ICognitoIdentity Identity { get; }
        public string InvokedFunctionArn { get; }
        public ILambdaLogger Logger { get; }
        public string LogGroupName { get; }
        public string LogStreamName { get; }
        public int MemoryLimitInMB { get; }
        public TimeSpan RemainingTime { get; }
    }
}