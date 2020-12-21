import { put, call } from "redux-saga/effects";

import { Review } from "../../models/Review";
import makeRequest from "../../api/makeRequest";

import { getAll  } from "../../api/endpoints/reviews";
import * as actionCreator from "./actions";

export function* fetch() {
  const { status, data: { data } } = yield call( makeRequest, getAll );

  if ( status === 200 && Array.isArray( data )) {
    const reviews = data.map( Review.buildReview );
    yield put( actionCreator.fetchSuccess( reviews ) );
  } else {
    yield put( actionCreator.fetchError( data ) );
  }
}
