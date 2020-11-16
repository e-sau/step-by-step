import { Model } from "../../models/Model";
/**
 * Чистая функция, гет запроса, передавать ее вызов в makeRequest
 * @param { Model } user
 * @return { Object<{ uri: String }> }
 *
 * @throws TypeError
 **/
export function signup( user ) {
    if ( !( user instanceof Model ) ) {
        throw new TypeError("Invalid argument error");
    }
    return {
        uri: "register",
        method: "POST",
        body: user.getData()
    };
}

/**
 * Чистая функция, POST запроса, передавать ее вызов в makeRequest
 * @param { String } email
 * @param { String } password
 * @return { Object<{ uri: String }> }
 *
 *  @throws Error
 **/
export function login( email, password ) {
    if ( !email || !password ) {
        throw new Error("Missing argument error");
    }

    return {
        uri: "login",
        method: "POST",
        body: { email, password }
    };
}

/**
 * Авторизация по токену и получение данных о пользователе
 * @param { String } token
 *
 * @throws Error
 **/
export function getUser( token ) {
    if ( !token ) {
        throw new Error("Missing argument error");
    }

    return {
        uri: "user",
        headers: {
            'Authorization': `Bearer ${ token }`
        }
    };
}
