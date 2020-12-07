/**
 * Получить модель пользователя
 * @param { Object } state
 * @return { User }
 **/
export function getModel( state ) {
  return state.user.model;
}

/**
 * Получить ID пользователя
 * @param { Object } state
 * @return { Number }
 **/
export function getUserID( state ) {
  return state.user.model.id;
}
