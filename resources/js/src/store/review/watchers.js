import { all, takeEvery } from "redux-saga/effects";
import { INITIALIZE_SUCCESS } from "../site/types";
import * as worker from "./workers";

/**
 * Данная фугкция отслеживает события с типом TEST_TYPE
 * @yield
 **/
function* watchForInitialize() {
  yield takeEvery( INITIALIZE_SUCCESS, worker.fetch );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* reviewWatchers() {
  yield all([
    watchForInitialize()
  ]);
}
