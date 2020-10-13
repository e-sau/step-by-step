CREATE DATABASE IF NOT EXISTS `step-by-step` COLLATE 'utf8_general_ci' ;
GRANT ALL ON `step-by-step`.* TO 'sbs_user'@'%' ;

FLUSH PRIVILEGES ;
