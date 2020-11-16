import { put, select, call } from "redux-saga/effects";
import { fetchError, fetchRequest, fetchSuccess } from "./actions";
import { getSelectedId } from "../subject/selectors";
import makeRequest from "../../api/makeRequest";
import { getBySubject } from "../../api/endpoints/tasks";

/**
 * Воркер который занимается получением задач для выбранного предмета
 * @yield
 **/
export function* fetchWorker() {
    yield put( fetchRequest() );
    const subjectId = yield select( getSelectedId );
    const { status, data } = yield call( makeRequest, getBySubject( subjectId ) );

    if ( status === 200 ) {
        yield put( fetchSuccess( data ) );
    } else {
        yield put( fetchError( data ) );
    }
}
