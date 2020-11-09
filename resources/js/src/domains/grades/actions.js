import * as ACTION from "./types";

/**
 * Вызов действия на получение классов
 * @return { Object }
 **/
export function fetch() {
    return { type: ACTION.FETCH_REQUEST };
}
/**
 * Вызов действия на успешный запрос к апи
 * @param { Array } data
 * @return { Object }
 **/
export function fetchSuccess( data ) {
    return { type: ACTION.FETCH_REQUEST, payload: data };
}

/**
 * Вызов действия на неудачный запрос к апи
 * @return { Object }
 **/
export function fetchError( error ) {
    return { type: ACTION.FETCH_ERROR, payload: error };
}

/**
 * Действие выбора класса
 * @param { Number } gradeId
 * @return { Object<{ type: String, payload: any }> }
 **/
export function select( gradeId ) {
    return { type: ACTION.SELECT, payload: gradeId };
}
