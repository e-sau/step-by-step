import { put } from "redux-saga/effects";
import {setTasksList} from "./actions";
import {Task} from "../../models/Task";

/**
 * @param { Object<{ type: String, payload: Array }> } action
 * @yield
 **/
export function* prepareTasks({ payload }) {
  const preparedTasks = payload.map( Task.buildTask );
  yield put( setTasksList( preparedTasks ) );
}
