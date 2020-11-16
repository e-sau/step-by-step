import * as TYPE from "./types";

/**
 * Вызов действия на получение классов
 * @return { Object }
 **/
export function fetchRequest() {
    return { type: TYPE.FETCH_REQUEST };
}
/**
 * Вызов действия на успешный запрос к апи
 * @param { Array } data
 * @return { Object }
 **/
export function fetchSuccess( data ) {
    return { type: TYPE.FETCH_SUCCESS, payload: data };
}

/**
 * Вызов действия на неудачный запрос к апи
 * @return { Object }
 **/
export function fetchError( error ) {
    return { type: TYPE.FETCH_ERROR, payload: error };
}

/**
 * Действие выбора класса
 * @param { Number } gradeId
 * @return { Object<{ type: String, payload: any }> }
 **/
export function click( gradeId ) {
    return { type: TYPE.SELECT, payload: gradeId };
}
