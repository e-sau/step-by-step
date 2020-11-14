/**
 * Получить список субьектов
 * @return { Object }
 **/
export function getAll( token ) {
    return {
        uri: "subjects",
    };
}

/**
 * Получить список субьектов для класса
 * @return { Object }
 *
 * @todo Доработать после решений на беке, сейчас заглушка
 **/
export function getByGrade( gradeId ) {
    if ( !gradeId ) {
        throw new Error("Missing argument error");
    }
    if ( typeof gradeId !== "number" ) {
        throw new TypeError();
    }
    console.warn({ gradeId, msg: "we dont have this method, take all subjects"  })
    return getAll();
}
