import * as TYPE from "./types";

/**
 * Получить все предметы
 * @return { Object }
 **/
export function fetchRequest() {
    return { type: TYPE.FETCH_REQUEST };
}
/**
 * Предметы получены успешно
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
 * Выбор предмета
 * @param { Number } id
 * @return { Object }
 **/
export function click( id ) {
    return { type: TYPE.SELECT, payload: id };
}
