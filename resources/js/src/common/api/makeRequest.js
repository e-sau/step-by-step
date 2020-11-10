import axios from 'axios';

const BASE_HEADERS = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json'
};

/**
 * Предварительная подготовка обьекта, ( просто избавился от let )
 * @param { Object|Function } requestData
 * @return { any }
 **/
export function processRequestData( requestData ) {
    if ( typeof requestData === "function" ) {
        return requestData();
    }
    return requestData;
}

/**
 * @param { Object } requestObj  -  обязательный параметр
 * @return { Promise }
 * @throws Error
 *
 * @example makeRequest( getTest ).then( r => console.log( r ) )
 *
 * @throws Error
 **/
export default function makeRequest( requestObj ) {
    const requestParams = processRequestData( requestObj );

    if ( !requestParams || !( requestParams instanceof Object) ) {
        throw new Error("Invalid argument Error");
    }

    const {
        url = process.env.MIX_APP_API_URL, /** String адресс сервера куда кидаем запрос напримеро http://localhost/ */
        uri = "",                          /** String uri, например /users  */
        headers = {},                      /** Object заголовки запроса */
        body = {} ,                        /** Object тело запроса */
        method = 'GET',                    /** String метод запроса */
    } = processRequestData( requestObj );

    return axios({
        url: `${ url }${ uri }`,
        method,
        data: body,
        headers: { ...BASE_HEADERS, ...headers }
    }).catch( error => error.response );
}
