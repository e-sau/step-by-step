import { all, takeEvery } from "redux-saga/effects";
import { fetchWorker } from "./workers";
import { SELECT as GRADE_SELECT } from "../grade/types";

/**
 * Отслеживание события @grade-SELECT
 * @yield
 **/
function* watchForSelect() {
  yield takeEvery( GRADE_SELECT, fetchWorker );
}

/**
 * Обьеденение и прослушивание всех событий
 * @yield
 **/
export default function* subjectWatchers() {
  yield all([
    watchForSelect(),
  ]);
}
