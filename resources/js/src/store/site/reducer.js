import * as TYPE from "./types";
/**
 * Начальное состояние
 **/

const siteInitializeState = {
  starting: false,
  initialized: false,
  internalError: false,
};

/**
 * Редьюсер
 **/
export default function siteReducer( state = siteInitializeState, action) {
  const { type } = action;

  switch ( type ) {
    /** Сигнал для всего приложения, чтоб началась инициализация */
    case TYPE.INITIALIZE: {
      return { ...state, starting: true };
    }
    /** Инициализация прошла без ошибок */
    case TYPE.INITIALIZE_SUCCESS: {
      return { ...state, starting: false, initialized: true };
    }
    /** При инициализации произошли ошибки @todo продумать как реагировать на них, и что прослушивать, сейчас этот кейс не используется */
    case TYPE.INITIALIZE_ERROR: {
      return { ...state, starting: false, internalError: true };
    }
    /** такого действия нет, отдаем state без изменений */
    default: {
      return state;
    }
  }
}
