import * as TYPE from "./types";

/**
 * Начальное состояние
 * @type { Object<{ isFetching: boolean, list: Array, error: any }>}
 **/
const taskInitialState = {
  isFetching: false,
  list: [],
  error: null
};

/**
 * Редьюсер для работы с задачами
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 **/
export default function taskReducer( state = taskInitialState, action ) {
  const { type, payload } = action;

  switch ( type ) {
    /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
    case TYPE.FETCH_REQUEST: {
      return {
        ...state,
        isFetching: true,
        list: taskInitialState.list
      };
    }
    /** обработка успешного запроса к апи */
    case TYPE.FETCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        list: payload
      };
    }
    /** обработка ошибки при запросе к апи */
    case TYPE.FETCH_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    }
    case TYPE.SET_TASKS_LIST: {
      return {
        ...state,
        list: payload
      };
    }
    /** такого действия нет, отдаем state без изменений */
    default: {
      return state;
    }
  }
}
