import { put } from "redux-saga/effects";
import { TEST_TYPE_WITH_PAYLOAD } from "./types";

export function* testWorker() {
    yield put({ type: TEST_TYPE_WITH_PAYLOAD, payload: "SAGA IS LISTENING!!"});
}
