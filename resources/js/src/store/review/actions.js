import * as TYPE from "./types";

/**
 * @return { Object }
 **/
export function fetch() {
  return { type: TYPE.FETCH };
}

/**
 * @param { Array } data
 * @return { Object }
 **/
export function fetchSuccess( data ) {
  return { type: TYPE.FETCH_SUCCESS , payload: data };
}

/**
 * @param { String } error
 * @return { Object }
 **/
export function fetchError( error ) {
  return { type: TYPE.FETCH_ERROR, payload: error };
}
