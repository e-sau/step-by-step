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

/**
 * Получить предмет с задааниями
 * @param { String } slug
 * @return { Object }
 **/
export function fetchSubjectWithTasks( slug ) {
  return { type: TYPE.FETCH_SUBJECT_WITH_TASKS, payload: slug };
}
/**
 * Предмет с задааниями получены успешно
 * @param { Subject } data
 * @return { Object }
 **/
export function fetchSubjectWithTasksSuccess( data ) {
  return { type: TYPE.FETCH_SUBJECT_WITH_TASKS_SUCCESS, payload: data };
}
/**
 * Ошибка при получении данных
 * @param { String } error
 * @return { Object }
 **/
export function fetchSubjectWithTasksError( error ) {
  return { type: TYPE.FETCH_SUBJECT_WITH_TASKS_ERROR, payload: error };
}
