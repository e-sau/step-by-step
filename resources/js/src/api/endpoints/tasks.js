import { Model } from "../../models/Model";

/**
 * Получить список задач
 * @return { Object }
 **/
export function getAll() {
  return {
    uri: "tasks",
  };
}

/**
 * Получить список задач
 * @param { Model } task
 * @return { Object }
 *
 * @throws TypeError
 **/
export function update( task ) {
  if ( !(task instanceof Model) ) {
    throw new TypeError();
  }
  return {
    uri: `tasks/${ task.id }`,
    method: "PUT",
    body: task.getData()
  };
}
