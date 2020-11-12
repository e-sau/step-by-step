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

