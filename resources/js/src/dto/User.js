import { DTO } from "./DTO";
import { EMAIL_REGEXP } from "../common/regexp";
import { required, match, length, compare } from "../common/validators";

/**
 * Класс отражающий сущьность пользователя
 * @extends DTO
 **/
export class User extends DTO {
    username;
    password;
    rePassword;
    email;
    name;
    surname;
    patronymic;
    bio;

    getRePassword = () => this.rePassword

    _rules = [
        [ "username", [ required, length( 3 ) ] ],
        [ "password", [ required, length( 3 ) ] ],
        [ "rePassword", [ required, compare( 'rePassword' ) ] ],
        [ "email", [ required, match( EMAIL_REGEXP ) ] ],
    ];

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
            surname: "Фамилия",
            patronymic: "Отчество",
            bio: "О себе",
        };
    }

    /**
     * @return { Object }
     * @override
     **/
    getData() {
        return {
            username: this.username,
            password: this.password,
            rePassword: this.rePassword,
            email: this.email,
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic,
            bio: this.bio,
        }
    }
}
