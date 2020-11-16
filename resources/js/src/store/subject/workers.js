import { select, call, put } from "redux-saga/effects";
import { getSelectedId } from "../grade/selectors";
import makeRequest from "../../api/makeRequest";
import { getByGrade } from "../../api/endpoints/subjects";
import { fetchRequest, fetchError, fetchSuccess } from "./actions";

/**
 * Обработка запроса на апи, при выборе класса
 * @yield
 **/
export function* fetchWorker() {
    yield put( fetchRequest() );

    const selectedGrade = yield select( getSelectedId );
    const { status, data } = yield call( makeRequest, getByGrade( selectedGrade ) );

    if ( status === 200 ) {
        yield put( fetchSuccess( data ) );
    } else {
        yield put( fetchError( data ) );
    }
}
