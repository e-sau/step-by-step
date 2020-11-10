import { call, put } from "redux-saga/effects";
import { fetchError, fetchSuccess } from "./actions";
import makeRequest from "../../common/api/makeRequest";
import { getAll } from "../../common/api/endpoints/grades";

/**
 * Запрос на получение всех классов
 * @yield
 **/
export function* fetchWorker() {
    const { status, data } = yield call( makeRequest, getAll() );
    if ( status === 200 ) {
        yield put( fetchSuccess( data ) );
    } else {
        yield put( fetchError( data ) );
    }
}
