import { DTO } from "../../dto/DTO";
/**
 * Чистая функция, гет запроса, передавать ее вызов в makeRequest
 * @param { DTO } user
 * @return { Object<{ uri: String }> }
 **/
export function signup( user ) {
    if ( !( user instanceof DTO ) ) {
        throw new Error("Invalid argument error");
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
 **/
export function login( email, password ) {
    if ( !email || !password ) {
        throw new Error("Missing argument error");
    }

    return {
        uri: "login",
        method: 'POST',
        body: { email, password }
    };
}
