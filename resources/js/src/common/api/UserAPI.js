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
        uri: "auth/register",
        method: "POST",
        body: user.getData()
    };
}

/**
 * Чистая функция, POST запроса, передавать ее вызов в makeRequest
 * @param { String } username
 * @param { String } password
 * @return { Object<{ uri: String }> }
 **/
export function login( username, password ) {
    if ( !username || !password ) {
        throw new Error("Missing argument error");
    }

    return {
        uri: "auth/login",
        method: 'POST',
        body: { username, password }
    };
}
