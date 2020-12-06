/**
 * Получить ID выбранного предмета
 * @property { Object } state
 * @return { Number }
 **/
export function getSelectedId( state ) {
  return state.grade.selectedId;
}
