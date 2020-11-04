import { DTO } from "./DTO";
import { EMAIL_REGEXP } from "../common/regexp";
import { required, getCompareValidator, getLengthValidator, getMatchValidator } from "../common/validators";

/**
 * Класс отражающий сущьность пользователя
 * @extends DTO
 **/
export class User extends DTO {
    name;
    password;
    rePassword;
    email;

    getRePassword = () => this.rePassword

    _rules = [
        [ "name", [ required, getLengthValidator( 4 ) ] ],
        [ "password", [ required, getLengthValidator( 6, 60 ) ] ],
        [ "rePassword", [ getCompareValidator( 'password') ] ],
        [ "email", [ required, getLengthValidator( 5 ), getMatchValidator( EMAIL_REGEXP ) ] ],
    ];

    _errorTranslates = {
        "The email has already been taken.": "Адресс электронной почты уже используется",
        "Wrong password": "Неверный email или пароль",
    }

    /**
     * @return { Object }
     * @override
     **/
    attributeLabels() {
        return {
            username: "Имя пользователя",
            password: "Пароль",
            rePassword: "Повтор пароля",
            email: "E-mail",
            name: "Имя",
        };
    }

    /**
     * @return { Object }
     * @override
     **/
    getData() {
        return {
            name: this.name,
            password: this.password,
            password_confirmation: this.rePassword,
            email: this.email,
        }
    }

}
