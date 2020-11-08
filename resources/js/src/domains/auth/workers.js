import { put, select, call } from "redux-saga/effects";

import { getSignupFormData } from "./selectors";
import { login, signup } from "../../common/api/UserAPI";
import makeRequest from "../../common/api/makeRequest";
import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, BACKEND_VALIDATION_ERROR } from "./types";
import { User } from "../../models/User";

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
        if ( !user || !user.validate( User.SIGNUP_SCENARIO ) ) {
            throw new Error("Validation error");
        }
        const { status, data } = yield call( makeRequest, signup( user ) );

        if ( status === 422 ) {
            yield put({ type: BACKEND_VALIDATION_ERROR, payload: data.errors });
        } else if( status === 200 ) {
            yield put({ type: SIGNUP_SUCCESS, payload: data.token });
        }
    } catch ( ex ) {
        yield put({ type: SIGNUP_ERROR });
    }
}

/**
 * Обработчик потока авторизации
 * @yield
 **/
export function* loginWorker() {
    const user = yield select( getSignupFormData );

    if ( user.validate( User.LOGIN_SCENARIO ) ) {
        const { status, data } = yield call( makeRequest, login( user.email, user.password ) );

        if ( status !== 200 ) {
            const errors = data.errors ? "Wrong username or password": null;
            yield put({ type: BACKEND_VALIDATION_ERROR, payload: [ errors ] });
        } else {
            yield put({ type: LOGIN_SUCCESS, payload: data.token });
        }
    } else {
        yield put({ type: LOGIN_ERROR });
    }
}
