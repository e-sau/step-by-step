# Step by Step 
### A primary education project

[![Node.js CI build](https://github.com/e-sau/step-by-step/workflows/Node.js%20CI/badge.svg)](https://github.com/e-sau/step-by-step/actions)

***
To start the project locally for the first time:
- Create an .env file from .env.example and complete it with the secret keys;
- Run ```composer install```;
- Run ```php artisan key:generate```;
- Create an .env file in /laradock and set ```WORKSPACE_INSTALL_XDEBUG=true``` and 
```PHP_FPM_INSTALL_XDEBUG=true```;
- Set /laradock .env MySQL to same values as .env;
- Run ```cd laradock```;
- ```docker-compose up -d nginx mysql workspace```;
- Open localhost.

***
To start the project locally:
- Run ```cd laradock```;
- ```docker-compose up -d nginx mysql workspace```;
- Open localhost.

***
***
To start use Passport run:   
```php artisan passport:install```

***
Refresh DB (execute all migrations and seed the data):  
```php artisan migrate:refresh --seed```

If you catch error then run:  
```php artisan migrate:fresh --seed```

***
#### Swagger
```php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"```  
```php artisan l5-swagger:generate```
- Open localhost/api/documentation

***
For store images create symlink  
```php artisan storage:link```
