/**
 * Получить DTO обьект, который используется на форме регистрации
 * @param { Object } state
 * @return { User }
 **/
export function getUserData( state ) {
    return state.auth.userData;
}

/**
 * Получить токен 
 * @param { Object } state
 * @return { String }
 **/
export function getToken( state ) {
    return state.auth.authToken;
}
