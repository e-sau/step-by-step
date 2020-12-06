import { all, takeEvery } from "redux-saga/effects";
import {SELECT_PHOTO, UPDATE_PROFILE} from "./types";
import { updateWorker, savePhotoWorker } from "./workers";

function* watchForProfileChange() {
  yield takeEvery( UPDATE_PROFILE, updateWorker );
}

function* watchForPhotoSelect() {
  yield takeEvery( SELECT_PHOTO, savePhotoWorker );
}

export default function* userWatchers() {
  yield all([
    watchForProfileChange(),
    watchForPhotoSelect(),
  ]);
}
