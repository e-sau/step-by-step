import { all } from "redux-saga/effects";
import exampleWatchers from "./domains/__example__/watchers";
import authWatchers from "./domains/auth/watchers";

/**
 * Корневая сага, в ней подключаются все "watchers:
 * @yield
 **/
export default function* () {
    yield all([
        exampleWatchers(),
        authWatchers()
    ]);
}
