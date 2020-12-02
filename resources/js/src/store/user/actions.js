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
 * @return { Object } }
 **/
export function updateProfile() {
    return { type: TYPE.UPDATE_PROFILE };
}

/**
 * Действие выбора новой фотографии
 * @return { Object } }
 **/
export function photoSelect( file ) {
    return { type: TYPE.SELECT_PHOTO, payload: file };
}
