import { select, call, put } from "redux-saga/effects";
import makeRequest, { HTTP } from "../../api/makeRequest";
import { getAll, getSubjectWithTasks } from "../../api/endpoints/subjects";
import {
  fetchCompletedSuccess,
  fetchAvailableSuccess,
  fetchAvailableError,
  fetchSubjectWithTasksError,
  fetchSubjectWithTasksSuccess, fetchAllSuccess, fetchAllError, fetchCompletedError, fetchCompletedRequest
} from "./actions";
import { Subject } from "../../models/Subject";
import { prepareTasks } from "../task/actions";
import { getCompletedSubjects } from "../../api/endpoints/user";
import { getCompletedList } from "./selectors";

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
  const { status, data: { data } } = yield call( makeRequest, getCompletedSubjects );
  if ( status === HTTP.OK  ) {
    yield put( fetchCompletedSuccess( data.map(Subject.buildSubject) ) );
  } else {
    yield put( fetchCompletedError( data ) );
  }
}

/**
 * Обработка запроса на апи, при выборе класса
 * @yield
 **/
export function* fetchAvailable() {
  yield put( fetchCompletedRequest() );
  const completed = yield select( getCompletedList );
  const { status, data: { data } } = yield call( makeRequest, getAll );


  if ( status === HTTP.OK ) {
    const available = data.filter( _item => {
      return !completed.find( _subj => _item.id === _subj.id );
    });

    yield put( fetchAvailableSuccess( available.map(Subject.buildSubject) ) );
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
    yield put( prepareTasks( slug, tasks ) );
  } else {
    yield put( fetchSubjectWithTasksError( "failed to fetch" ));
  }
}
