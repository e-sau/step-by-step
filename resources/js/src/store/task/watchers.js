import { all, takeEvery } from "redux-saga/effects";
import * as TYPE from "./types";
import * as worker from "./workers";

/**
 * Обработка события на подготовку задач
 * @yield
 **/
function* watchForPrepareTasks() {
  yield takeEvery( TYPE.PREPARE_TASKS, worker.prepareTasks );
}

/**
 * Обработка события на сохранение выполения задачи
 * @yield
 **/
function* watchForSolveTask() {
  yield takeEvery( TYPE.SOLVE_TASK, worker.solveTask );
}

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* taskWatchers() {
  yield all([
    watchForPrepareTasks(),
    watchForSolveTask(),
  ]);
}
