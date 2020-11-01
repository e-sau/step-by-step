import { put, select, call } from "redux-saga/effects";

import { getSignupFormData } from "./selectors";
import { login, signup } from "../../common/api/UserAPI";
import makeRequest from "../../common/api/makeRequest";
import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";

/**
 * Обработчик потока сохранения пользователя, в случае успеха - инициирует действие успешной регистрации
 * в противном случае - инициирует действие ошибки
 * В обоих случаях, ссылка на обьект DTO обновляется, чтоб обновилась форма
 *
 * @yield
 **/
export function* submitWorker() {
    const user = yield select( getSignupFormData );

    try {
        if ( !user || !user.validate() ) {
            throw new Error("Validation error");
        }
        const token = yield call( makeRequest, signup( user ) );
        yield put({ type: SIGNUP_SUCCESS, payload: token });
    } catch ( ex ) {
        console.error( ex );
        yield put({ type: SIGNUP_ERROR, payload: ex });
    }
}

/**
 * Обработчик потока авторизации
 * @yield
 **/
export function* loginWorker() {
    const user = yield select( getSignupFormData );

    try {

        ["username", "password"].forEach( item => {
            return user.validateAttribute( item, user.findValidators( item ));
        });

        if ( user.getErrors().length ) {
            throw new Error("Validation error");
        }
        const token = yield call( makeRequest, login( user.username, user.password ) );
        yield put({ type: LOGIN_SUCCESS, payload: token });
    } catch ( ex ) {
        console.error( ex );
        yield put({ type: LOGIN_ERROR, payload: ex });
    }
}
