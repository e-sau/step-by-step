import { all, takeEvery } from "redux-saga/effects";
import { TEST_TYPE } from "./types";
import { testWorker } from "./workers";

/**
 * Данная фугкция отслеживает события с типом TEST_TYPE
 * @yield
 **/
function* watchForTest() {
    yield takeEvery( TEST_TYPE, testWorker );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* exampleWatchers() {
    yield all([
        watchForTest()
    ]);
}
