import * as TYPE from "./types";

/**
 * Начальное состояние
 * @type { Object<{ list: Array, selectedId: Number, isFetching: Boolean }>}
 **/
const gradesInitialState = {
  list: [],
  selectedId: null,
  isFetching: false,
};

/**
 * Редьюсер для работы с классами
 * @param { Object } state
 * @param { Object } action
 * @return { Object }
 **/
export default function gradesReducer( state = gradesInitialState, action ) {
  const { type, payload } = action;

  switch ( type ) {
    /** сохранение Id выбранного класса */
    case TYPE.SELECT: {
      return {
        ...state,
        selectedId: payload,
      };
    }
    /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
    case TYPE.FETCH_REQUEST: {
      return { ...state, isFetching: true };
    }
    /** обработка успешного запроса к апи */
    case TYPE.FETCH_SUCCESS: {
      return {
        ...state,
        list: payload,
        isFetching: false
      };
    }
    /** обработка ошибки при запросе к апи */
    case TYPE.FETCH_ERROR: {
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    }
    /** такого действия нет, отдаем state без изменений */
    default: {
      return state;
    }
  }
}
