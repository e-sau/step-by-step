import * as TYPE from "./types";
import {Subject} from "../../models/Subject";

/**
 * Начальное состояние
 * @type { Object<{ isFetching: Boolean, selectedId: Number, list: Array, error: any }>}
 **/
const subjectInitialState = {
    isFetching: false,
    selectedId: null,

    /** @todo получать это с бека, с переводом, написать задачу на бек( чтоб позволили получать список предметом без авторизации ) */
    previewList: [
        new Subject( 1,"Русский язык" ),
        new Subject(2,"Математика" ),
        new Subject(3,"Окружающий мир" ),
    ],
    list: [],
    error: null
};

/**
 * Редьюсер для работы с предметами
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 **/
export default function subjectReducer( state = subjectInitialState, action ) {
    const { type, payload } = action;

    switch ( type ) {
    /** сигнал что предмет был выбран, и сохранение его id */
        case TYPE.SELECT: {
            return { ...state, selectedId: payload };
        }
        /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
        case TYPE.FETCH_REQUEST: {
            return { ...state, isFetching: true };
        }
        /** обработка успешного запроса к апи */
        case TYPE.FETCH_SUCCESS: {
            return { ...state, isFetching: false, list: payload };
        }
        /** обработка ошибки при запросе к апи */
        case TYPE.FETCH_ERROR: {
            return { ...state, isFetching: false, error: payload };
        }
        /** такого действия нет, отдаем state без изменений */
        default: {
            return state;
        }
    }
}
