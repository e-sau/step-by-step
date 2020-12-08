import { select, call, put } from "redux-saga/effects";
import makeRequest from "../../api/makeRequest";
import { getAvailable } from "../../api/endpoints/subjects";
import { fetchCompletedSuccess, fetchAvailableSuccess, fetchAvailableError } from "./actions";
import { getUserID } from "../user/selectors";

/**
 * Обработка запроса на апи, при выборе класса
 * @yield
 **/
export function* fetchCompleted() {
  // const userId = yield select( getUserID );
  // const { status, data } = yield call( makeRequest, getCompleted( userId ) );

  /** @todo заменить на данные */
  const mockSubject = { id: 1, subject: "Математика в картинках", grade: 1, middleScore: 5, completeDate: "28.10.2020" };

  // if ( status === 200 ) {
  yield put( fetchCompletedSuccess(  Array(12).fill( mockSubject ) ) );
  // } else {
  //   yield put( fetchCompletedError( data ) );
  // }
}

/**
 * Обработка запроса на апи, при выборе класса
 * @yield
 **/
export function* fetchAvailable() {
  const userId = yield select( getUserID );
  const { status, data } = yield call( makeRequest, getAvailable( userId ) );

  /** @todo заменить на данные */
  const mockSubject = { id: 1, subject: "Математика в картинках", grade: 1 };

  if ( status === 200 ) {
    yield put( fetchAvailableSuccess( Array(12).fill( mockSubject )  ) );
  } else {
    yield put( fetchAvailableError( data ) );
  }
}
