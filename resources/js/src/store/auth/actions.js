import * as TYPE from "./types";

/**
 * Действие попытки авторизации по токену
 * @return { Object }
 **/
export function authByToken() {
  return { type: TYPE.AUTH_BY_TOKEN };
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
 * @param { string } token
 *
 * @return { Object } }
 **/
export function signupSuccess( token ) {
  return { type: TYPE.SIGNUP_SUCCESS, payload: token };
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
 * @param { string } email
 * @param { string } password
 *
 * @return { Object }
 **/
export function login( email, password ) {
  return { type: TYPE.LOGIN, payload: { email, password } };
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
export function responseError( errors ) {
  return { type: TYPE.RESPONSE_ERROR, payload: errors };
}

/**
 * Действие открытия/закрытия формы входа
 * @return { Object }
 **/
export function toggleAuthForm() {
  return { type: TYPE.AUTH_FORM_TOGGLE };
}

/**
 * Действие отправки данных на авторизацию
 * @return { Object }
 **/
export function logout() {
  return { type: TYPE.LOGOUT };
}
