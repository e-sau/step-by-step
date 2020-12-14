import { call, select, put } from "redux-saga/effects";

import makeRequest, { HTTP } from "../../api/makeRequest";
import { update, savePhoto } from "../../api/endpoints/user";
import { getByGrade } from "../../api/endpoints/ratings";

import { User } from "../../models/User";
import { getModel } from "./selectors";
import { fetchRatingError, fetchRatingSuccess, updateError, updateRef, updateSuccess } from "./actions";

/**
 * Обновить данные пользователя
 * @yield
 **/
export function* userUpdate() {
  const user = yield select( getModel );

  if ( user.validate( User.UPDATE_SCENARIO ) ) {
    const { status } = yield call( makeRequest, update( user ) );

    if ( status === HTTP.OK ) {
      yield put( updateSuccess() );
      return;
    }
  }
  yield put( updateError("save error") );
}

/**
 * Сохранение фотографии
 * @yield
 **/
export function* saveUserPhoto( action ) {
  const { payload } = action;
  const user = yield select( getModel );

  const { status, data } = yield call( makeRequest, savePhoto( payload ) );

  if ( status === HTTP.CREATED ) {
    user.avatar = data.url;
    yield put( updateRef() );
  } else {
    yield put( updateError("save error") );
  }
}

/**
 * Получение рейтинга пользователя в классе
 * @yield
 **/
export function* getRatingByGrade() {
  const { status, data } = yield call( makeRequest, getByGrade );

  if ( status === HTTP.OK ) {
    yield put( fetchRatingSuccess( data ) );
  } else {
    yield put( fetchRatingError( data ) );
  }
}
