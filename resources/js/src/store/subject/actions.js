import * as TYPE from "./types";

/**
 * Получить все пройденные предметы
 * @return { Object }
 **/
export function fetchCompletedRequest() {
  return { type: TYPE.FETCH_COMPLETED };
}

/**
 * Получить все доступные предметы
 * @return { Object }
 **/
export function fetchAvailableRequest() {
  return { type: TYPE.FETCH_AVAILABLE };
}

/**
 * Пройденные предметы получены успешно
 * @param { Array } data
 * @return { Object }
 **/
export function fetchCompletedSuccess( data ) {
  return { type: TYPE.FETCH_COMPLETED_SUCCESS, payload: data };
}
/**
 * Ошибка при получении данных
 * @param { any } error
 * @return { Object }
 **/
export function fetchCompletedError( error ) {
  return { type: TYPE.FETCH_COMPLETED_ERROR, payload: error };
}

/**
 * Доступные предметы получены успешно
 * @param { Array } data
 * @return { Object }
 **/
export function fetchAvailableSuccess( data ) {
  return { type: TYPE.FETCH_AVAILABLE_SUCCESS, payload: data };
}
/**
 * Ошибка при получении данных
 * @param { any } error
 * @return { Object }
 **/
export function fetchAvailableError( error ) {
  return { type: TYPE.FETCH_AVAILABLE_ERROR, payload: error };
}
