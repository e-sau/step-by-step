alias env-up='cd laradock/ && docker-compose up -d nginx php-fpm mysql workspace && cd ..'
alias env-down='cd laradock/ && docker-compose down && cd ..'
alias php-fpm='cd laradock/ && docker-compose exec -u www-data php-fpm bash && cd ..'
