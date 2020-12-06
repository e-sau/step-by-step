import * as TYPE from "./types";
import { User } from "../../models/User";
import { object } from "../../common/helpers";

/**
 * Начальное состояние редьюсера
 * @type { Object<{ model: User, errors: Array  }> }
 **/
const authInitialState = {
  model: new User(),
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
export default function userReducer( state = authInitialState, action ) {
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
      return { ...state, model: object.update( model, newPropertyValue ) };
    }

    /** Установка параметров в модель */
    case TYPE.SET_MODEL_DATA: {
      return {
        ...state,
        errors: payload,
        model: object.update( state.model, Object.entries( payload ) ),
      };
    }

    case TYPE.UPDATE_REF: {
      return {
        ...state,
        errors: payload,
        model: object.update( state.model ),
      };
    }

    /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
    default: {
      return state;
    }
  }
}
