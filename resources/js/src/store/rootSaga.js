import { all } from "redux-saga/effects";
import authWatchers from "./auth/watchers";
import gradeWatchers from "./grade/watchers";
import subjectWatchers from "./subject/watchers";
import taskWatchers from "./task/watchers";

/**
 * Корневая сага, в ней подключаются все "watchers:
 * @yield
 **/
export default function* () {
    yield all([
        authWatchers(),
        gradeWatchers(),
        subjectWatchers(),
        taskWatchers(),
    ]);
}
