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
 * Получить список субьектов для класса
 * 
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
