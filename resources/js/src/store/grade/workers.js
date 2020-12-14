import { call, put } from "redux-saga/effects";
import { fetchError, fetchSuccess } from "./actions";
import makeRequest, { HTTP } from "../../api/makeRequest";
import { getAll } from "../../api/endpoints/grades";

/**
 * Запрос на получение всех классов
 * @yield
 **/
export function* fetchWorker() {
  const { status, data } = yield call( makeRequest, getAll() );
  if ( status === HTTP.OK ) {
    yield put( fetchSuccess( data ) );
  } else {
    yield put( fetchError( data ) );
  }
}
