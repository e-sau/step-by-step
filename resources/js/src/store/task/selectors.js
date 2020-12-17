/**
 * @param { Object } state
 * @return { Array }
 **/
export function getTasks( state ) {
  return state.task.list;
}
