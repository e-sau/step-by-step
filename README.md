# Step by Step
### A primary education project

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
- Open localhost;

***
To start the project locally:
- Run ```cd laradock```;
- ```docker-compose up -d nginx mysql workspace```;
- Open localhost:80;
