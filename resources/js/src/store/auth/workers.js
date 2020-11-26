import { put, select, call } from "redux-saga/effects";

import { User } from "../../models/User";
import makeRequest from "../../api/makeRequest";
import { login, signup, getUser } from "../../api/endpoints/users";
import { object, string } from "../../common/helpers";

import { getModel } from "../user/selectors";
import { getToken } from "./selectors";
import { setUserData, updateRef as updateUserRef } from "../user/actions";
import { responseError, loginError, loginSuccess, signupError, signupSuccess } from "./actions";

/**
 * Получение токена, и вызов цепочки действия при успешном логине ( костыльно, возможно потом переработаем )
 * @yield
 **/
export function* getTokenFromStorageWorker() {
    /** @todo плохо завязыватся на конкретную реализацию, подумать как отвязатся от такого вызова */
    const token = localStorage.getItem( process.env.MIX_APP_TOKEN_KEY );

    if ( token ) {
        yield put( loginSuccess( token ) );
    } else {
        yield put( loginError() );
    }
}

/**
 * Обработчик потока сохранения пользователя, в случае успеха - инициирует действие успешной регистрации
 * в противном случае - инициирует действие ошибки
 * В обоих случаях, ссылка на обьект DTO обновляется, чтоб обновилась форма
 *
 * @yield
 **/
export function* submitWorker() {
    const user = yield select( getModel );

    try {
        if ( !user || !user.validate( User.SIGNUP_SCENARIO ) ) {
            throw new Error("Validation error");
        }
        const { status, data } = yield call( makeRequest, signup( user ) );

        if ( status !== 200 ) {
            user.setErrors( data.errors );
            throw new Error("Validation error");
        }
        yield put( signupSuccess( data.token ) );
    } catch ( ex ) {
        yield put( signupError() );
    }

    yield put( updateUserRef() );
}

/**
 * Обработчик потока авторизации
 * @yield
 **/
export function* loginWorker() {
    const user = yield select( getModel );

    if ( user.validate( User.LOGIN_SCENARIO ) ) {
        const { status, data } = yield call( makeRequest, login( user.email, user.password ) );

        if ( status === 200 ) {
            yield put( loginSuccess( data.token ) );
        } else {
            yield put( responseError([ "Wrong username or password" ]) );
        }
    } else {
        yield put( loginError() );
    }

    yield put( updateUserRef() );
}

/**
 * Обработчик успешной авторизации и регистрации, сохраняем токен и выполняем авторизацию по нему на бекенде
 * @yield
 **/
export function* tokenAuthWorker() {
    const token = yield select( getToken );
    const { status, data } = yield call( makeRequest, getUser( token ) );

    if ( status === 200 ) {
        const preparedUserData = object.keysTransform( data, string.snakeCaseToCamelCase );
        yield put( setUserData( preparedUserData ) );

        /** @todo плохо завязыватся на конкретную реализацию, подумать как отвязатся от такого вызова */
        localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, token );
    } else {
        yield put( loginError() );
    }
}
