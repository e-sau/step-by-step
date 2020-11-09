import { all, takeEvery } from "redux-saga/effects";
import { SELECT, FETCH_REQUEST } from "./types";
import { selectWorker, fetchWorker } from "./workers";

/**
 * Отслеживание действия выбора класса
 * @yield
 **/
function* watchForSelectGrade() {
    yield takeEvery( SELECT, selectWorker );
}

/**
 * Отслеживание действия на получение данных о классах
 * @yield
 **/
function* watchForFetchGrades() {
    yield takeEvery( FETCH_REQUEST, fetchWorker );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* gradeWatchers() {
    yield all([
        watchForSelectGrade(),
        watchForFetchGrades(),
    ]);
}
