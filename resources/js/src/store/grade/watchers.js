import { all, takeEvery } from "redux-saga/effects";
import { FETCH_REQUEST } from "./types";
import { fetchWorker } from "./workers";

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
    watchForFetchGrades(),
  ]);
}
