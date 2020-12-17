import { select, call, put } from "redux-saga/effects";
import makeRequest, { HTTP } from "../../api/makeRequest";
import { getAll, getAvailable, getSubjectWithTasks } from "../../api/endpoints/subjects";
import {
  fetchCompletedSuccess,
  fetchAvailableSuccess,
  fetchAvailableError,
  fetchSubjectWithTasksError,
  fetchSubjectWithTasksSuccess, fetchAllSuccess, fetchAllError
} from "./actions";
import { getUserID } from "../user/selectors";
import { Subject } from "../../models/Subject";
import { prepareTasks } from "../task/actions";

/**
 * Обработка запроса на апи, на получение всех предметов
 * @yield
 **/
export function* fetchAll() {
  const { status, data: { data } } = yield call( makeRequest, getAll );
  if ( status === HTTP.OK  ) {
    yield put(
      fetchAllSuccess( data.map( Subject.buildSubject ) )
    );
  } else {
    yield put( fetchAllError( data ) );
  }
}

/**
 * Обработка запроса на апи, при выборе класса
 * @yield
 **/
export function* fetchCompleted() {
  // const userId = yield select( getUserID );
  // const { status, data } = yield call( makeRequest, getCompleted( userId ) );

  /** @todo заменить на данные */
  const mockSubject = { id: 1, subject: "Математика в картинках", grade: 1, middleScore: 5, completeDate: "28.10.2020" };

  // if ( status === HTTP.OK  ) {
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

  if ( status === HTTP.OK ) {
    yield put( fetchAvailableSuccess( Array(12).fill( mockSubject )  ) );
  } else {
    yield put( fetchAvailableError( data ) );
  }
}

/**
 * Получение предмета с заданиями
 * @param { Object } action;
 *
 * @yield
 **/
export function* fetchSubjectWithTasks( action ) {
  const slug = action.payload.replace( "-", "_" );

  const { status, data: { data } } = yield call( makeRequest, getSubjectWithTasks( slug ) );
  if ( status === HTTP.OK ) {
    const { tasks, ...subjectProps } = data;
    yield put(
      fetchSubjectWithTasksSuccess( Subject.buildSubject( subjectProps ) )
    );
    yield put( prepareTasks( tasks ) );
  } else {
    yield put( fetchSubjectWithTasksError( "failed to fetch" ));
  }
}
