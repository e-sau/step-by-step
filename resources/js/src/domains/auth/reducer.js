import * as TYPE from './types';
import { User } from "../../models/User";
import { update as updateObject } from "../../common/helpers/object";

/**
 * Начальное состояние редьюсера
 * @type { Object<{ isAuthorized: Boolean, signupFormData: User, authToken: String, errors: Array  }> }
 **/
const authInitialState = {
    isAuthorized: false,
    authToken: null,
    signupFormData: new User(),
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
        case TYPE.CHANGE_SIGNUP_DATA: {
            const { key, value } = payload;
            const { signupFormData } = state;

            const newPropertyValue = [
                [ key, value ],
                [ "_errors", signupFormData._errors.filter( ([ attr ]) => attr !== key ) ],
            ];

            return { ...state, signupFormData: updateObject( signupFormData, newPropertyValue ) };
        }
        /** Обработка успешной регистрации */
        case TYPE.SIGNUP_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        /** Обработка ошибки на клиенте при регистрации */
        case TYPE.SIGNUP_ERROR: {
            return {
                ...state,
                signupFormData: updateObject( state.signupFormData ),
                errors: payload
            };
        }
        /** Обработка успешной авторизации */
        case TYPE.LOGIN_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        /** Обработка ошибки валидации на клиенте */
        case TYPE.LOGIN_ERROR: {
            return {
                ...state,
                signupFormData: updateObject( state.signupFormData )
            };
        }
        /** Обработка ошибки при валидации на бекенде */
        case TYPE.BACKEND_VALIDATION_ERROR: {
            return {
                ...state,
                errors: payload,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
        default: {
            return state;
        }
    }
}
