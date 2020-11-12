import { Model } from "./Model";
import { EMAIL_REGEXP } from "../common/regexp";
import { required, getCompareValidator, getLengthValidator, getMatchValidator } from "../common/validators";

/**
 * Класс отражающий сущьность пользователя
 * @extends Model
 **/
export class User extends Model {
    static LOGIN_SCENARIO = "login";
    static SIGNUP_SCENARIO = "signup";

    name;
    password;
    rePassword;
    email;

    _rules = {
        signup: [
            [ "name", [ required, getLengthValidator( 4 ) ] ],
            [ "password", [ required, getLengthValidator( 6, 60 ) ] ],
            [ "rePassword", [ getCompareValidator( 'password') ] ],
            [ "email", [ required, getLengthValidator( 5 ), getMatchValidator( EMAIL_REGEXP ) ] ],
        ],
        login: [
            [ "email", [ required, getMatchValidator( EMAIL_REGEXP ) ] ],
            [ "password", [ required, getLengthValidator( 6, 60 )] ],
        ],
    };

    _errorTranslates = {
        "The email has already been taken.": "Адресс электронной почты уже используется",
        "Wrong username or password": "Неверный email или пароль",
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
