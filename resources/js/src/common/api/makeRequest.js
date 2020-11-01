import axios from 'axios';

const BASE_HEADERS = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json'
};

/**
 * @param { Object } requestObj  -  обязательный параметр
 * @return { Promise }
 *
 * @throws Error
 *
 * @example makeRequest( getTest ).then( r => console.log( r ) )
 **/
export default function makeRequest( requestObj ) {
    let requestData = requestObj;

    if ( typeof requestObj === "function" ) {
        requestData = requestObj();
    }
    const { uri, headers = {}, body = {} , method = 'GET' } = requestData;

    return axios({
        method,
        url: `${ process.env.MIX_APP_API_URL }${ uri }`,
        data: body,
        headers: { ...BASE_HEADERS, ...headers }
    });
}
