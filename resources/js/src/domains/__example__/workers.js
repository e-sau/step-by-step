import { put } from "redux-saga/effects";
import { testActionWithPayload } from "./actions";

export function* testWorker() {
    yield put( testActionWithPayload( "SAGA IS LISTENING!!" ) );
}
