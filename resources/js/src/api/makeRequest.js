import axios from "axios";

export const BASE_HEADERS = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json"
};

/**
 * Тут низкоуровневая логика аксиоса, пусть такой простой и остается
 * @param { Object } requestConfig
 * @return { Promise }
 **/
function axiosCall( requestConfig ) {
  const token = localStorage.getItem( process.env.MIX_APP_TOKEN_KEY );

  if ( token ) {
    requestConfig.headers["Authorization"] = `Bearer ${ token }`;
  }

  return axios( requestConfig ).catch( error => error.response );
}

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
 * @param { Function } apiCaller
 *
 * @return { Object }  -  вернет результат вызова второго аргумента
 * @throws Error
 *
 * @example makeRequest( getTest ).then( r => console.log( r ) )
 *
 * @throws Error
 **/
export default function makeRequest( requestObj, apiCaller = axiosCall ) {
  const requestParams = processRequestData( requestObj );

  if ( !( requestParams && typeof requestParams === "object") ) {
    throw new Error("Invalid argument Error");
  }

  if ( typeof apiCaller !== "function" ) {
    throw new Error("Invalid argument Error");
  }

  const {
    url = process.env.MIX_APP_API_URL, /** String адресс сервера куда кидаем запрос напримеро http://localhost/ */
    uri = "",                          /** String uri, например /users  */
    headers = {},                      /** Object заголовки запроса */
    body = {} ,                        /** Object тело запроса */
    method = "GET",                    /** String метод запроса */
  } = requestParams;

  return apiCaller({
    url: `${ url }${ uri }`,
    method,
    data: body,
    headers: {
      ...BASE_HEADERS,
      ...headers,
    }
  });
}
