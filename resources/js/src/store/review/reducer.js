import * as TYPE from "./types";
/**
 * Начальное состояние
 **/
const reviewInitialState = {
  list: [],
  isFetching: false,
  errors: null,
};

/**
 * Редьюсер
 **/
export default function reviewReducer( state = reviewInitialState, action) {
  const { type, payload } = action;

  switch ( type ) {
    /** Сигнализируем что запрос отправлен, отображаем loader */
    case TYPE.FETCH: {
      return { ...state, isFetching: true };
    }
    /** Данные успешно получены */
    case TYPE.FETCH_SUCCESS: {
      return { ...state, list: payload, isFetching: false };
    }
    /** Ошибка при получении данных */
    case TYPE.FETCH_ERROR: {
      return { ...state, errors: payload, isFetching: false };
    }
    /** такого действия нет, отдаем state без изменений */
    default: {
      return state;
    }
  }
}
