/**
 * Получить токен
 * @param { Object } state
 * @return { String }
 **/
export function getToken( state ) {
  return state.auth.authToken;
}

/**
 * Получить состояние пользователя по авторизации
 * @param { Object } state
 * @return { String }
 **/
export function isAuthorized( state ) {
  return state.auth.isAuthorized;
}
