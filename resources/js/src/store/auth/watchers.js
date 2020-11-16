import { all, takeEvery } from "redux-saga/effects";
import { SUBMIT, LOGIN, SIGNUP_SUCCESS, AUTH_BY_TOKEN, LOGIN_SUCCESS } from "./types";
import { submitWorker, loginWorker, tokenAuthWorker, getTokenFromStorageWorker } from "./workers";

/**
 * Отслеживание события при инициализации приложения ( автологин по токену ), отслеживает действие с типом AUTH_BY_TOKEN
 * @yield
 **/
function* watchForAuthByToken() {
    yield takeEvery( AUTH_BY_TOKEN, getTokenFromStorageWorker );
}

/**
 * Данная фугкция отслеживает события с типом SUBMIT
 * @yield
 **/
function* watchForSubmit() {
    yield takeEvery( SUBMIT, submitWorker );
}

/**
 * Данная фугкция отслеживает события с типом LOGIN
 * @yield
 **/
function* watchForLoginRequest() {
    yield takeEvery( LOGIN, loginWorker );
}

/**
 * Отслеживание события успешного логина, служит сигналом для сохранения токена, и попытки по нему авторизоватся
 * @yield
 **/
function* watchLoginSuccess() {
    yield takeEvery( LOGIN_SUCCESS, tokenAuthWorker );
}

/**
 * Отслеживание события успешной ретистрации, служит сигналом для сохранения токена, и попытки по нему авторизоватся
 * @yield
 **/
function* watchForSignup() {
    yield takeEvery( SIGNUP_SUCCESS, tokenAuthWorker );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* authWatchers() {
    yield all([
        watchForAuthByToken(),
        watchForSubmit(),
        watchForLoginRequest(),
        watchLoginSuccess(),
        watchForSignup(),
    ]);
}
