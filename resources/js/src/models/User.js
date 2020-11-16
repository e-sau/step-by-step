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

    /**
     * ID пользователя в базе данных
     * @type int
     **/
    id;
    /**
     * Имя пользователя
     * @type string
     **/
    name;
    /**
     * Пароль
     * @type string
     **/
    password;
    /**
     * Подверждение ввода пароля
     * @type string
     **/
    rePassword;
    /**
     * Почта
     * @type string
     **/
    email;
    /**
     * Роли пользователя
     * @type Array
     **/
    roles = [];

    /**
     * Правила валидации модели, с учетом разных стратегий
     * @type Object
     **/
    _rules = {
        signup: [
            [ "name", [ required, getLengthValidator( 4 ) ] ],
            [ "password", [ required, getLengthValidator( 6, 60 ) ] ],
            [ "rePassword", [ getCompareValidator( 'password') ] ],
            [ "email", [ required, getLengthValidator( 5 ), getMatchValidator( EMAIL_REGEXP ) ] ],
        ],
        login: [
            [ "email", [ required ] ],
            [ "password", [ required ] ],
        ],
    };

    /**
     * Маппинг текстовых ошибок валидации бека, на наш перевод
     * @type Object
     **/
    _errorTranslates = {
        "The email has already been taken.": "Адресс электронной почты уже используется",
        "Wrong username or password": "Неверный email или пароль",
    }

    /**
     * Получить Label для атрибута модели
     * @override  Переопределение родительского метода
     *
     * @return { Object }
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
     * Получить даные о пользователе в виде простого обьекта
     * @override  Переопределение родительского метода
     *
     * @return { Object }
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
