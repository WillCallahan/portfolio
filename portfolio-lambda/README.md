# Portfolio Lambda

Basic AWS lambda-backed application used to send emails in support of the contact functionality on the front-end.

## Build

```shell
dotnet lambda package -c Release -f net8.0 -o ./bin/Portfolio.Lambda.2025-01-01T1726.zip
```

## Dependencies

- AWS Lambda Tools (`dotnet tool install -g Amazon.Lambda.Tools`)