/**
 * Получить данные со стора, которые относятся к test редьюсеру ( по свое сути, эти геттеры маппинг, по сущьностям )
 * @param { Object<{ test: Number, auth: Object, grade: Object }> } state
 * @return { Number }
 **/
export function getSelectedId( state ){
    return state.grade.selectedId;
}
