# Portfolio

Portfolio application created by William Callahan

## Deployment

After all the dependencies are installed run the following commands in the directory of the project:

Install application dependencies via composer

```
composer update
```

Install npm packages

```
npm install
```

Compile npm modules

```
npm run production
```

Migrate the database

```
php artisan migrate
```

### Deployment Inspection

Run the following commands to check you Apache installation and configuration

```
apache2ctl -S
apache2ctl configtest
```

### Dependencies

Ensure that the following dependencies are installed on your system before attempting to run the application.

- PHP 7.1
- MySql 5.*
- Composer ^1.5
- Npm ^5.*
- NodeJS ^8.*
- Apache
    - mod_rewrite

## Technologies

- PHP
- MySql
- Laravel
- ReactJS
- SASS
- BootStrap
- Apache
- WebGL
- ThreeJS
- AWS Lambda
- AWS DynamoDB
- AWS RDS