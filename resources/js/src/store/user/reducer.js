import * as TYPE from "./types";
import { User } from "../../models/User";
import { objectClone } from "../../common/helpers";

/**
 * Начальное состояние редьюсера
 * @type { Object<{ model: User, errors: Array  }> }
 **/
const userInitialState = {
  model: new User(),
  rating: null,
  errors: [],
};

/**
 * Редьюсер который работает с данными пользователя
 * во внешних файлах наызывается как "userReducer", ключ в сторе "user"
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 **/
export default function userReducer( state = userInitialState, action ) {
  const { type, payload } = action;

  switch ( type ) {
    /** Обновление данных о пользователе */
    case TYPE.CHANGE_MODEL_ATTRIBUTE: {
      const { key, value } = payload;
      const { model } = state;

      const newPropertyValue = [
        [ key, value ],
        [ "_errors", model._errors.filter( ([ attr ]) => attr !== key ) ],
      ];
      return { ...state, model: objectClone( model, newPropertyValue ) };
    }

    /** Установка параметров в модель */
    case TYPE.SET_MODEL_DATA: {
      return {
        ...state,
        model: objectClone( state.model, Object.entries( payload ) ),
      };
    }
    /** Обновить ссылку на обьект */
    case TYPE.UPDATE_REF: {
      return {
        ...state,
        model: objectClone( state.model ),
      };
    }
    /** Успешное обновление данных пользователя */
    case TYPE.UPDATE_SUCCESS: {
      return {
        ...state,
        errors: userInitialState.errors,
      };
    }
    /** Ошибка при обновление данных пользователя */
    case TYPE.UPDATE_ERROR: {
      return {
        ...state, errors: payload,
      };
    }
    /** Успешное получение рейтинга  */
    case TYPE.FETCH_RATING_SUCCESS: {
      return {
        ...state, rating: payload,
      };
    }
    /** Ошибка при получение рейтинга  */
    case TYPE.FETCH_RATING_ERROR: {
      return {
        ...state, errors: payload,
      };
    }
    default: {
      return state;
    }
  }
}
