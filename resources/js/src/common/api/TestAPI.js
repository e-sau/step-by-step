
/**
 * Чистая функция, гет запроса, передавать ее вызов в makeRequest
 * @return { Object<{ uri: String }> }
 **/
export function getTest() {
    return { uri: 'test', headers: { 'X_TEXT': '1'}};
}

/**
 * Чистая функция, POST запроса, передавать ее вызов в makeRequest
 * @return { Object<{ uri: String }> }
 *
 * @todo протестировать
 **/
export function postTest() {
    return {
        uri: 'test',
        method: 'POST',
        body: { test: 'test' }
    };
}
