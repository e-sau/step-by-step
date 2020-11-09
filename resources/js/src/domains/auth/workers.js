import { put, select, call } from "redux-saga/effects";

import { User } from "../../models/User";
import makeRequest from "../../common/api/makeRequest";
import { login, signup } from "../../common/api/endpoints/users";

import { getSignupFormData } from "./selectors";
import { backendValidationError, loginError, loginSuccess, signupError, signupSuccess } from "./actions";

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
            yield put( backendValidationError( data.errors ));
        } else if( status === 200 ) {
            yield put( signupSuccess( data.token) );
        }
    } catch ( ex ) {
        yield put( signupError() );
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
            yield put( backendValidationError([ "Wrong username or password" ]) );
        } else {
            yield put( loginSuccess( data.token ) );
        }
    } else {
        yield put( loginError() );
    }
}
