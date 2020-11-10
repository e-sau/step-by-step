/**
 * Получить список субьектов
 * @return { Object<{ uri: String }>}
 **/
export function getAll() {
    return { uri: "subjects" };
}

/**
 * Получить список субьектов для класса
 * @return { Object }
 *
 * @todo Доработать после решений на беке, сейчас заглушка
 **/
export function getByGrade( gradeId ) {
    console.warn({ gradeId, msg: "we dont have this method, take all subjects"  })
    return getAll();
}
