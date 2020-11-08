import * as ACTION from './types';
import { User } from "../../models/User";
import { update as updateObject } from "../../common/helpers/objectHelpers";

const authInitialState = {
    isAuthorized: false,
    authToken: null,
    signupFormData: new User(),
    errors: [],
}

/**
 * Редьюсер который работает с данными авторизации, и регистрации
 * во внешних файлах наызывается как "authReducer", ключ в сторе "auth"
 * @param { Object<{ isAuthorized: Boolean, signupFormData: User }> } state
 * @param { Object<{ type: String, payload: any }> } action
 *
 * @return { Object<{ isAuthorized: Boolean, signupFormData: User }> }
 **/
export default function( state = authInitialState, action ) {
    const { type, payload } = action;

    switch ( type ) {
        case ACTION.SUBMIT: {
            return {
                ...state,
                errors: authInitialState.errors,
            };
        }
        case ACTION.CHANGE_SIGNUP_DATA: {
            const { key, value } = payload;
            const { signupFormData } = state;

            const newPropertyValue = [
                [ key, value ],
                [ "_errors", signupFormData._errors.filter( ([ attr ]) => attr !== key ) ],
            ];

            return { ...state, signupFormData: updateObject( signupFormData, newPropertyValue ) };
        }
        case ACTION.SIGNUP_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        case ACTION.SIGNUP_ERROR: {
            return {
                ...state,
                signupFormData: updateObject( state.signupFormData ),
                errors: payload
            };
        }
        case ACTION.LOGIN_SUCCESS: {
            return {
                ...state,
                authToken: payload,
                isAuthorized: true,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        case ACTION.LOGIN_ERROR: {
            return {
                ...state,
                signupFormData: updateObject( state.signupFormData )
            };
        }
        case ACTION.BACKEND_VALIDATION_ERROR: {
            return {
                ...state,
                errors: payload,
                signupFormData: updateObject( state.signupFormData ),
            };
        }
        default: {
            return state
        }
    }
}
