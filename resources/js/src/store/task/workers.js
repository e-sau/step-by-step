import { call, put, select } from "redux-saga/effects";
import { setTasksList, solveTaskError, solveTaskSuccess } from "./actions";
import { Task } from "../../models/Task";
import makeRequest, { HTTP } from "../../api/makeRequest";
import { getTasks } from "./selectors";
import { completeTask, getUserTasksBySlug } from "../../api/endpoints/user";
import { isAuthorized } from "../auth/selectors";

/**
 * @param { Object<{ type: String, payload: Array }> } action
 * @yield
 **/
export function* prepareTasks( action ) {
  const { slug, tasks } = action.payload;

  const authorized = yield select( isAuthorized );
  if ( authorized ) {
    const { status, data: { data } } = yield call( makeRequest, getUserTasksBySlug( slug ) );

    if ( status === HTTP.OK && Array.isArray( data ) ) {
      tasks.forEach( item => {
        const taskState = data.find( t => t.id === item.id );
        item.completed = taskState ? taskState.isCompleted : false;
      });
    }
  }

  const preparedTasks = tasks.map( Task.buildTask );
  yield put( setTasksList( preparedTasks ) );
}

/**
 * @param { Object<{ type: String, payload: Array }> } action
 * @yield
 **/
export function* solveTask({ payload }) {
  const tasksList = yield select( getTasks );
  const selectedTask = tasksList.find( task => task.id === payload );

  const { status, data } = yield call( makeRequest, completeTask( selectedTask.id ) );

  if ( status === HTTP.OK ) {
    selectedTask.isComplete = true;
    yield solveTaskSuccess();
  } else {
    yield solveTaskError( data );
  }
}
