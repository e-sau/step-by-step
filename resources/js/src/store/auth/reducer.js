import * as TYPE from './types';
import { User } from "../../models/User";
import { object } from "../../common/helpers";

/**
 * Начальное состояние редьюсера
 * @type { Object<{ isAuthorized: Boolean, userData: User, authToken: String, errors: Array  }> }
 **/
const authInitialState = {
    isAuthorized: false,
    authToken: null,
    userData: new User(),
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
        /** Обновление данных о пользователе */
        case TYPE.CHANGE_USER_DATA: {
            const { key, value } = payload;
            const { userData } = state;

            const newPropertyValue = [
                [ key, value ],
                [ "_errors", userData._errors.filter( ([ attr ]) => attr !== key ) ],
            ];

            return { ...state, userData: object.update( userData, newPropertyValue ) };
        }
        /** Обработка успешной регистрации */
        case TYPE.SIGNUP_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                userData: object.update( state.userData ),
            };
        }
        /** Обработка ошибки на клиенте при регистрации */
        case TYPE.SIGNUP_ERROR: {
            return {
                ...state,
                userData: object.update( state.userData ),
                errors: payload
            };
        }
        /** Обработка успешной авторизации */
        case TYPE.LOGIN_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                userData: object.update( state.userData ),
            };
        }
        /** Обработка ошибки валидации на клиенте */
        case TYPE.LOGIN_ERROR: {
            return {
                ...state,
                isAuthorized: false,
                userData: object.update( state.userData )
            };
        }
        /** Обработка ошибки при валидации на бекенде */
        case TYPE.BACKEND_VALIDATION_ERROR: {
            return {
                ...state,
                errors: payload,
                userData: object.update( state.userData ),
            };
        }
        case TYPE.SET_USER_DATA: {
            return {
                ...state,
                errors: payload,
                userData: object.update( state.userData, Object.entries( payload ) ),
            };
        }
        /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
        default: {
            return state;
        }
    }
}
