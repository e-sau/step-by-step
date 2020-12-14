import { all, takeEvery } from "redux-saga/effects";
import * as TYPE from "./types";
import * as worker from "./workers";
import { LOGIN_SUCCESS } from "../auth/types";

/**
 * Отслеживание события @user-UPDATE_PROFILE
 * @yield
 **/
function* watchForProfileChange() {
  yield takeEvery( TYPE.UPDATE_PROFILE, worker.userUpdate );
}

/**
 * Отслеживание события @user-SELECT_PHOTO
 * @yield
 **/
function* watchForPhotoSelect() {
  yield takeEvery( TYPE.SELECT_PHOTO, worker.saveUserPhoto );
}

/**
 * Отслеживание события @auth-LOGIN_SUCCESS
 * @yield
 **/
function* watchForLogin() {
  yield takeEvery( LOGIN_SUCCESS, worker.getRatingByGrade );
}

export default function* userWatchers() {
  yield all([
    watchForProfileChange(),
    watchForPhotoSelect(),
    watchForLogin(),
  ]);
}
