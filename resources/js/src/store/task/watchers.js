import { all } from "redux-saga/effects";

/**
 * Обьеденение всех слушателей, и экспорт функции на подключении в файле rootSaga
 * @yield
 **/
export default function* taskWatchers() {
  yield all([
  ]);
}
