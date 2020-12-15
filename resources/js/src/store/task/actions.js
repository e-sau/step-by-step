import * as TYPE from "./types";

/**
 * Получить все предметы
 * @return { Object }
 **/
export function fetchRequest() {
  return { type: TYPE.FETCH_REQUEST };
}

/**
 * Задания получены успешно
 * @param { Array } data
 * @return { Object }
 **/
export function fetchSuccess( data ) {
  return { type: TYPE.FETCH_SUCCESS, payload: data };
}

/**
 * Ошибка при получении данных
 * @param { any } error
 * @return { Object }
 **/
export function fetchError( error ) {
  return { type: TYPE.FETCH_ERROR, payload: error };
}

/**
 * Преобразование денных о задачах, в обекты задачи
 * @param { Array } tasks
 * @return { Object }
 **/
export function prepareTasks( tasks ) {
  return { type: TYPE.PREPARE_TASKS, payload: tasks };
}

/**
 * Установить список задач в store
 * @param { Array } tasks
 * @return { Object }
 **/
export function setTasksList( tasks ) {
  return { type: TYPE.SET_TASKS_LIST, payload: tasks };
}
