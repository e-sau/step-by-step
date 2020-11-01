import { all, takeEvery } from "redux-saga/effects";
import { SUBMIT, LOGIN } from "./types";
import { submitWorker, loginWorker } from "./workers";

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
function* watchForLogin() {
    yield takeEvery( LOGIN, loginWorker );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* authWatchers() {
    yield all([
        watchForSubmit(),
        watchForLogin()
    ]);
}
