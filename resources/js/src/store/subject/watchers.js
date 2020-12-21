import { all, takeEvery } from "redux-saga/effects";
import * as worker from "./workers";
import * as ACTION from "./types";

/**
 * Отслеживание события @subject-FETCH_COMPLETED
 * @yield
 **/
function* watchForFetchCompleted() {
  yield takeEvery( ACTION.FETCH_COMPLETED, worker.fetchCompleted );
}

/**
 * Отслеживание события @subject-FETCH_AVAILABLE
 * @yield
 **/
function* watchForFetchAvailable() {
  yield takeEvery( ACTION.FETCH_AVAILABLE, worker.fetchAvailable );
}
/**
 * Отслеживание события @subject-FETCH_SUBJECT_WITH_TASKS
 * @yield
 **/
function* watchForFetchSubjectWithTasks() {
  yield takeEvery( ACTION.FETCH_SUBJECT_WITH_TASKS, worker.fetchSubjectWithTasks );
}
/**
 * Отслеживание события @subject-FETCH_ALL
 * @yield
 **/
function* watchForFetchAll() {
  yield takeEvery( ACTION.FETCH_ALL, worker.fetchAll );
}

/**
 * Обьеденение и прослушивание всех событий
 * @yield
 **/
export default function* subjectWatchers() {
  yield all([
    watchForFetchAll(),
    watchForFetchCompleted(),
    watchForFetchAvailable(),
    watchForFetchSubjectWithTasks(),
  ]);
}
