import { all, takeEvery } from "redux-saga/effects";
import { SELECT } from "../subject/types";
import { fetchWorker } from "./workers";

/**
 * Данная фугкция отслеживает события с типом @subject-SELECT
 * И вызывает получение всех заданий для этого предмета
 * @yield
 **/
function* watchForSubjectSelect() {
    yield takeEvery( SELECT, fetchWorker );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* taskWatchers() {
    yield all([
        watchForSubjectSelect()
    ]);
}
