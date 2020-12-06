/**
 * Получить данные со стора, которые относятся к test редьюсеру ( по свое сути, эти геттеры маппинг, по сущьностям )
 * @param { Object<{ test: Number, auth: Object }> } state
 * @return { Number }
 **/
export function getTestCount( state ){
  return state.test;
}
