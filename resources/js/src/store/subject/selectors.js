/**
 * @property { Object } state
 * @return { Array }
 **/
export function getCompletedList( state ) {
  return state.subject.completed;
}
