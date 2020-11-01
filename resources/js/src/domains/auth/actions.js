import { CHANGE_SIGNUP_DATA, SUBMIT, LOGIN } from "./types";

/**
 * Действие изменения данных на форме регистрации
 * @return { Object<{ type: String, payload: Object<{ key: String, value: String }> }> }
 **/
export function changeSignupData( key, value ) {
    return { type: CHANGE_SIGNUP_DATA, payload: { key, value } };
}
/**
 * Действие отправки формы на регистрацию
 * @return { Object<{ type: String }> }> }
 **/
export function submit() {
    return { type: SUBMIT };
}
/**
 * Действие отправки данных на авторизацию
 * @return { Object<{ type: String }> }> }
 **/
export function login() {
    return { type: LOGIN };
}
