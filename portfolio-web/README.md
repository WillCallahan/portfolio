# Summary

Professional Profile for William Callahan

## Installation

```shell
yarn install --check-files
```

## Run

```shell
yarn run dev
```

## Build

```shell
yarn run build
```

## Deploy

```shell
cd dist
aws s3 sync ./ s3://callahanwilliam.portfolio/
aws cloudfront create-invalidation --distribution-id E3N17S6LM6YDG2 --paths "/*"
```

## Dependencies

- NodeJS 22
- Yarn

## Technologies

- ReactJS
- Vite
- CloudFront
- S3
- Lambda
- API Gateway