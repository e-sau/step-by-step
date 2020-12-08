import { put, select, call } from "redux-saga/effects";

import { User } from "../../models/User";
import makeRequest from "../../api/makeRequest";
import { login, signup } from "../../api/endpoints/auth";
import { get as getUser } from "../../api/endpoints/user";
import { object, string } from "../../common/helpers";

import { getModel } from "../user/selectors";
import { getToken } from "./selectors";
import { setUserData, updateRef as updateUserRef } from "../user/actions";
import { responseError, loginError, loginSuccess, signupError, signupSuccess } from "./actions";

/**
 * Получение токена, и вызов цепочки действия при успешном логине ( костыльно, возможно потом переработаем )
 * @yield
 **/
export function* getTokenFromStorage() {
  /** @todo плохо завязыватся на конкретную реализацию, подумать как отвязатся от такого вызова */
  const token = localStorage.getItem( process.env.MIX_APP_TOKEN_KEY );

  if ( token ) {
    yield put( loginSuccess( token ) );
  } else {
    yield put( loginError() );
  }
}

/**
 * Обработчик потока сохранения пользователя, в случае успеха - инициирует действие успешной регистрации
 * в противном случае - инициирует действие ошибки
 * В обоих случаях, ссылка на обьект DTO обновляется, чтоб обновилась форма
 *
 * @yield
 **/
export function* submit() {
  const user = yield select( getModel );

  try {
    if ( !user || !user.validate( User.SIGNUP_SCENARIO ) ) {
      throw new Error("Validation error");
    }
    const { status, data } = yield call( makeRequest, signup( user ) );

    if ( status !== 200 ) {
      user.setErrors( data.errors );
      throw new Error("Validation error");
    }
    yield put( signupSuccess( data.token ) );
  } catch ( ex ) {
    yield put( signupError() );
  }

  yield put( updateUserRef() );
}

/**
 * Обработчик потока авторизации
 * @yield
 **/
export function* userLogin( action ) {
  const { email, password } = action.payload;
  const user = new User();
  user.email = email;
  user.password = password;

  if ( user.validate( User.LOGIN_SCENARIO ) ) {
    const { status, data } = yield call( makeRequest, login( user.email, user.password ) );

    if ( status === 200 ) {
      localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, data.token );
      yield put( loginSuccess( data.token ) );

      return;
    }
  }
  yield put( responseError([ "Wrong username or password" ]) );
}

/**
 * Обработчик успешной авторизации и регистрации, сохраняем токен и выполняем авторизацию по нему на бекенде
 * @yield
 **/
export function* tokenAuth() {
  const token = yield select( getToken );
  const { status, data: responseBody } = yield call( makeRequest, getUser );

  if ( status === 200 ) {
    const body = responseBody.data;
    const preparedUserData = {
      ...object.keysTransform( body, string.snakeCaseToCamelCase ),
      photo: body.avatar?.photo
    };
    yield put( setUserData( preparedUserData ));

    localStorage.setItem( process.env.MIX_APP_TOKEN_KEY, token );
  } else {
    yield put( loginError() );
  }
}

/**
 * Разлогинить пользователя
 * @yield
 **/
export function* logout() {
  yield localStorage.removeItem( process.env.MIX_APP_TOKEN_KEY );
}

