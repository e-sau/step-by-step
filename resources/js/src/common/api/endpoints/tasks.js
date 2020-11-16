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
 * @todo Доработать после решений на беке, сейчас заглушка
 **/
export function getBySubject( subjectId ) {
    if ( !subjectId ) {
        throw new Error("Missing argument error");
    }
    if ( typeof subjectId !== "number" ) {
        throw new TypeError();
    }
    console.warn({ subjectId, msg: "we dont have this method, take all tasks"  })
    return getAll();
}
