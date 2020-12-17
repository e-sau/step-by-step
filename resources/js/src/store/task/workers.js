import { call, put, select } from "redux-saga/effects";
import { setTasksList, solveTaskError, solveTaskSuccess } from "./actions";
import { Task } from "../../models/Task";
import makeRequest, { HTTP } from "../../api/makeRequest";
import { update } from "../../api/endpoints/tasks";
import { getTasks } from "./selectors";

/**
 * @param { Object<{ type: String, payload: Array }> } action
 * @yield
 **/
export function* prepareTasks({ payload }) {
  const preparedTasks = payload.map( Task.buildTask );
  yield put( setTasksList( preparedTasks ) );
}

/**
 * @param { Object<{ type: String, payload: Array }> } action
 * @yield
 **/
export function* solveTask({ payload }) {
  const tasksList = yield select( getTasks );
  const selectedRef = tasksList.find( task => task.id === payload );

  const { status, data } = yield call( makeRequest, update( selectedRef ) );

  if ( status === HTTP.OK ) {
    selectedRef.updatedAt = new Date().toISOString();
    yield solveTaskSuccess();
  } else {
    yield solveTaskError( data );
  }
}
