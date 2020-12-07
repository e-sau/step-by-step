import { all, takeEvery } from "redux-saga/effects";
import { fetchCompletedWorker, fetchAvailableWorker } from "./workers";
import * as ACTION from "./types";

/**
 * Отслеживание события @subject-FETCH_COMPLETED
 * @yield
 **/
function* watchForFetchCompleted() {
  yield takeEvery( ACTION.FETCH_COMPLETED, fetchCompletedWorker );
}

/**
 * Отслеживание события @subject-FETCH_AVAILABLE
 * @yield
 **/
function* watchForFetchAvailable() {
  yield takeEvery( ACTION.FETCH_AVAILABLE, fetchAvailableWorker );
}

/**
 * Обьеденение и прослушивание всех событий
 * @yield
 **/
export default function* subjectWatchers() {
  yield all([
    watchForFetchCompleted(),
    watchForFetchAvailable(),
  ]);
}
