import { put } from "redux-saga/effects";
import { initializeSuccess } from "./actions";
import { authByToken } from "../auth/actions";

/**
 * Сейчас просто вызов другого действия, в дальнейшем будут добавленны новые действия
 * @yield
 **/
export function* initialize() {
  yield put( authByToken() );
  yield put( initializeSuccess() );
}
