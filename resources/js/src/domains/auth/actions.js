import * as TYPE from "./types";

/**
 * Действие изменения данных на форме регистрации
 * @return { Object } }
 **/
export function changeSignupData( key, value ) {
    return { type: TYPE.CHANGE_SIGNUP_DATA, payload: { key, value } };
}

/**
 * Действие отправки формы на регистрацию
 * @return { Object }
 **/
export function submit() {
    return { type: TYPE.SUBMIT };
}

/**
 * Действие успешной регистрации
 * @return { Object } }
 **/
export function signupSuccess() {
    return { type: TYPE.SIGNUP_SUCCESS };
}

/**
 * Действие ошибки пре регистрации
 * @return { Object }
 **/
export function signupError() {
    return { type: TYPE.SIGNUP_ERROR };
}

/**
 * Действие отправки данных на авторизацию
 * @return { Object }
 **/
export function login() {
    return { type: TYPE.LOGIN };
}
/**
 * Действие успешной авторизации
 * @param { String } token
 * @return { Object }
 **/
export function loginSuccess( token ) {
    return { type: TYPE.LOGIN_SUCCESS, payload: token };
}
/**
 * Действие ошибки при авторизации
 * @return { Object }
 **/
export function loginError() {
    return { type: TYPE.LOGIN_ERROR };
}

/**
 * Действие ошибки валидации на бекенде
 * @param { Array } errors
 * @return { Object }
 **/
export function backendValidationError( errors ) {
    return { type: TYPE.BACKEND_VALIDATION_ERROR, payload: errors };
}
