/**
 * Получить список субьектов
 * @return { Object }
 **/
export function getAll() {
  return {
    uri: "subjects",
  };
}

/**
 * Получить список предметов для класса
 * @return { Object }
 **/
export function getByGrade( gradeId ) {
  if ( !gradeId ) {
    throw new Error("Missing argument error");
  }
  if ( typeof gradeId !== "number" ) {
    throw new TypeError();
  }
  return {
    uri: `subjects/getByGrade/${ gradeId }`,
  };
}

/**
 * Получить список завершонных предметов
 * @return { Object }
 **/
export function getCompleted( id ) {
  return {
    uri: `subjects/completed/${ id }`,
  };
}

/**
 * Получить список доступных предметов
 * @return { Object }
 **/
export function getAvailable( id ) {
  return {
    uri: `subjects/available/${ id }`,
  };
}




