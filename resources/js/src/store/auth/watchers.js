import { all, takeEvery } from "redux-saga/effects";
import * as TYPE from "./types";
import * as worker from "./workers";

/**
 * Отслеживание события при инициализации приложения ( автологин по токену ), отслеживает действие с типом AUTH_BY_TOKEN
 * @yield
 **/
function* watchForAuthByToken() {
  yield takeEvery( TYPE.AUTH_BY_TOKEN, worker.getTokenFromStorage );
}

/**
 * Данная фугкция отслеживает события с типом SUBMIT
 * @yield
 **/
function* watchForSubmit() {
  yield takeEvery( TYPE.SUBMIT, worker.submit );
}

/**
 * Данная фугкция отслеживает события с типом LOGIN
 * @yield
 **/
function* watchForLoginRequest() {
  yield takeEvery( TYPE.LOGIN, worker.userLogin );
}

/**
 * Отслеживание события успешного логина, служит сигналом для сохранения токена, и попытки по нему авторизоватся
 * @yield
 **/
function* watchLoginSuccess() {
  yield takeEvery( TYPE.LOGIN_SUCCESS, worker.tokenAuth );
}

/**
 * Отслеживание события успешной регистрации, служит сигналом для сохранения токена, и попытки по нему авторизоватся
 * @yield
 **/
function* watchForSignup() {
  yield takeEvery( TYPE.SIGNUP_SUCCESS, worker.tokenAuth );
}

/**
 * Отслеживание события LOGOUT
 * @yield
 **/
function* watchForLogout() {
  yield takeEvery( TYPE.LOGOUT, worker.logout );
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
    watchForLogout(),
  ]);
}
