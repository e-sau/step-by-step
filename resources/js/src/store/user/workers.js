import { call, select, put } from "redux-saga/effects";
import makeRequest from "../../api/makeRequest";
import { update, savePhoto } from "../../api/endpoints/user";
import { getModel } from "./selectors";
import { User } from "../../models/User";
import { updateError, updateRef, updateSuccess } from "./actions";

/**
 * Обновить данные пользователя
 * @yield
 **/
export function* userUpdate() {
  const user = yield select( getModel );

  if ( user.validate( User.UPDATE_SCENARIO ) ) {
    const { status } = yield call( makeRequest, update( user ) );

    if ( status === 200 ) {
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

  if ( status === 201 ) {
    user.avatar = data.url;
    yield put( updateRef() );
  } else {
    yield put( updateError("save error") );
  }
}
