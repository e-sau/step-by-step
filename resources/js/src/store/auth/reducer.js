import * as TYPE from './types';

/**
 * Начальное состояние редьюсера
 * @type { Object<{ isAuthorized: Boolean, authToken: String, errors: Array  }> }
 **/
const authInitialState = {
    isAuthorized: false,
    authToken: null,
    errors: [],
}

/**
 * Редьюсер который работает с данными авторизации, и регистрации
 * во внешних файлах наызывается как "authReducer", ключ в сторе "auth"
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 **/
export default function authReducer( state = authInitialState, action ) {
    const { type, payload } = action;

    switch ( type ) {
        /** Обработка действия валидации и отправки данных на бекенд */
        case TYPE.SUBMIT: {
            return {
                ...state,
                errors: authInitialState.errors,
            };
        }
        /** Обработка успешной регистрации */
        case TYPE.SIGNUP_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
            };
        }
        /** Обработка ошибки на клиенте при регистрации */
        case TYPE.SIGNUP_ERROR: {
            return {
                ...state, errors: payload
            };
        }
        /** Обработка успешной авторизации */
        case TYPE.LOGIN_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
            };
        }
        /** Обработка ошибки валидации на клиенте */
        case TYPE.LOGIN_ERROR: {
            return {
                ...state,
                isAuthorized: false,
            };
        }
        /** Обработка ошибки при валидации на бекенде */
        case TYPE.RESPONSE_ERROR: {
            return {
                ...state,
                errors: payload,
            };
        }
        /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
        default: {
            return state;
        }
    }
}
