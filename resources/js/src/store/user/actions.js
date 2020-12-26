import * as TYPE from "./types";

/**
 * Запросить обновление ссылки на обьект пользователя
 * @return { Object }
 **/
export function updateRef() {
  return { type: TYPE.UPDATE_REF };
}
/**
 * Действие получения данных о пользователе после авторизации по токену, и заполнение ими модели
 * @return { Object }
 **/
export function setUserData( data ) {
  return { type: TYPE.SET_MODEL_DATA, payload: data };
}

/**
 * Действие изменения данных пользователя
 * @return { Object } }
 **/
export function changeModelAttribute( key, value ) {
  return { type: TYPE.CHANGE_MODEL_ATTRIBUTE, payload: { key, value } };
}

/**
 * Действие отправки измененных данных на сохранение
 * @param { User } user
 * @return { Object } }
 **/
export function updateProfile( user ) {
  return { type: TYPE.UPDATE_PROFILE, payload: user };
}

/**
 * Действие отправки измененных данных на сохранение
 * @param { User } user
 * @return { Object } }
 **/
export function updateSuccess( user) {
  return { type: TYPE.UPDATE_SUCCESS, payload: user  };
}

/**
 * Действие отправки измененных данных на сохранение
 * @param { String } error
 * @return { Object } }
 **/
export function updateError( error ) {
  return { type: TYPE.UPDATE_ERROR, payload: error };
}

/**
 * Действие выбора новой фотографии
 * @return { Object } }
 **/
export function photoSelect( file ) {
  return { type: TYPE.SELECT_PHOTO, payload: file };
}

/**
 * Действие сигнализирующее успешное получение рейтинга
 * @return { Object } }
 **/
export function fetchRatingSuccess( data ) {
  return { type: TYPE.FETCH_RATING_SUCCESS, payload: data };
}

/**
 * Действие сигнализирующее что была ошибка при получении рейтинга
 * @return { Object } }
 **/
export function fetchRatingError( error ) {
  return { type: TYPE.FETCH_RATING_ERROR, payload: error };
}