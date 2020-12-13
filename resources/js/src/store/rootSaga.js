import { all } from "redux-saga/effects";
import authWatchers from "./auth/watchers";
import gradeWatchers from "./grade/watchers";
import subjectWatchers from "./subject/watchers";
import userWatchers from "./user/watchers";
import siteWatchers from "./site/watchers";
import reviewWatchers from "./review/watchers";

/**
 * Корневая сага, в ней подключаются все "watchers:
 * @yield
 **/
export default function* () {
  yield all([
    siteWatchers(),
    authWatchers(),
    gradeWatchers(),
    subjectWatchers(),
    userWatchers(),
    reviewWatchers(),
  ]);
}
