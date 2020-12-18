/**
 * Получить список предметов
 * @return { Object }
 **/
export function getAll() {
  return {
    uri: "subjects",
  };
}

/**
 * Получить предмет, с задачами
 * @param { String|Number } slug
 *
 * @return { Object }
 **/
export function getSubjectWithTasks( slug ) {
  if ( !(["string", "number"].includes( typeof slug )) ) {
    throw TypeError();
  }
  return {
    uri: `subjects/${ slug }?with=tasks`
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
 * Получить список завершенных предметов
 * @return { Object }
 *
 * @throws Error|TypeError
 **/
export function getCompleted( id ) {
  if ( !id ) {
    throw new Error("Missing argument error");
  }

  if ( typeof id !== "number" ) {
    throw new TypeError();
  }

  return {
    uri: `subjects/completed/${ id }`,
  };
}

/**
 * Получить список доступных предметов
 * @return { Object }
 *
 * @throws Error|TypeError
 **/
export function getAvailable( id ) {

  if ( !id ) {
    throw new Error("Missing argument error");
  }

  if ( typeof id !== "number" ) {
    throw new TypeError();
  }

  return {
    uri: `subjects/available/${ id }`,
  };
}




