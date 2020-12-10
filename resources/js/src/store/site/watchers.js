import { all, takeEvery } from "redux-saga/effects";
import * as TYPE from "./types";
import * as worker from "./workers";

/**
 * Данная фугкция отслеживает события с типом TEST_TYPE
 * @yield
 **/
function* watchForInitialize() {
  yield takeEvery( TYPE.INITIALIZE, worker.initialize );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* siteWatchers() {
  yield all([
    watchForInitialize()
  ]);
}
