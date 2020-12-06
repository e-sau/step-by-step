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
 * Получить список субьектов для класса
 * @return { Object }
 *
 * @throws Error|TypeError
 **/
export function getBySubject( subjectId ) {
  if ( !subjectId ) {
    throw new Error("Missing argument error");
  }
  if ( typeof subjectId !== "number" ) {
    throw new TypeError();
  }
  return {
    uri: `tasks/getBySubject/${ subjectId }`,
  };
}
