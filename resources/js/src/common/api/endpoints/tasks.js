/**
 * Получить список задач
 * @return { Object<{ uri: String }>}
 **/
export function getAll() {
    return { uri: "tasks" };
}

/**
 * Получить список субьектов для класса
 * @return { Object }
 *
 * @todo Доработать после решений на беке, сейчас заглушка
 **/
export function getBySubject( subjectId ) {
    console.warn({ subjectId, msg: "we dont have this method, take all tasks"  })
    return getAll();
}
