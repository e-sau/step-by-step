import axios from 'axios';

const BASE_HEADERS = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json'
};

/**
 * @param { Object } requestObj  -  обязательный параметр
 * @return { Promise }
 * @throws Error
 *
 * @example makeRequest( getTest ).then( r => console.log( r ) )
 **/
export default function makeRequest( requestObj ) {
    let requestData = requestObj;

    if ( typeof requestObj === "function" ) {
        requestData = requestObj();
    }
    const {
        url = process.env.MIX_APP_API_URL, /** String адресс сервера куда кидаем запрос напримеро http://localhost/ */
        uri = "",                          /** String uri, например /users  */
        headers = {},                      /** Object заголовки запроса */
        body = {} ,                        /** Object тело запроса */
        method = 'GET',                    /** String метод запроса */
    } = requestData;

    return axios({
        url: `${ url }${ uri }`,
        method,
        data: body,
        headers: { ...BASE_HEADERS, ...headers }
    }).catch( error => error.response );
}
