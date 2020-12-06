/**
 * Получить токен
 * @param { Object } state
 * @return { String }
 **/
export function getToken( state ) {
  return state.auth.authToken;
}
