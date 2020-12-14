/**
 * Установка дескрипторов атрибуду обьекта
 * @param { any } value
 * @return { Object }
 **/
export function setObjectPropertyDescriptors( value ) {
  return { value, enumerable: true, configurable: true, writable: true };
}

/**
  * Обновление ссылки на обьект
  * @param { Object } object
  * @param { Array } properties
  * @return { Object }
  *
  * @throws TypeError
  **/
export function objectClone( object, properties= [] ) {
  if ( !object || typeof object !== "object" ) {
    throw new TypeError("First argument must be Object type!");
  }

  if ( !Array.isArray( properties ) ) {
    throw new TypeError("Second argument must be Array type!");
  }

  const combinedProperties = [ ...Object.entries( object ), ...properties ];
  const configuredProperties = combinedProperties.reduce((acc, item) => {
    const [ key, value ] = item;
    return { ...acc, [key]: setObjectPropertyDescriptors( value ) };
  }, {});
  return Object.create( object, configuredProperties );
}

/**
* Функция трансформации ключей обьекта, по правилам функции которая переданна вторым аргументом
* @param { Object } input
* @param { Function } transformFunc
*
* @return { Object }
* @throws Error|TypeError
**/
export function objectTransformKeys( input, transformFunc ) {
  if ( arguments.length < 2 ) {
    throw new Error("Missing argument error");
  }

  if ( !input || typeof input !== "object" ) {
    throw new TypeError("Second argument must be Object");
  }

  if ( !transformFunc || typeof transformFunc !== "function" ) {
    throw new TypeError("Second argument must be function");
  }

  return Object.entries( input ).reduce(( acc, [ key, value] ) => {
    return {
      ...acc,
      [ transformFunc(key) ]: value
    };
  }, {});
}


/**
* Простой алгоритм конвертации snakeCase нотации в lowerCamelCase
* @param { String } string
*
* @throws Error|TypeError
**/
export function snakeCaseToLowerCamelCase( string ) {
  if ( !string ) {
    throw new Error( "Missing argument error ");
  }

  const parts = String( string ).split( "_" );

  return parts.reduce( ( acc, item, idx ) => {
    /** обработка крайнего случая, так как мы недолжны капсить букву если она одна */
    const isFirstAndLastItem = !acc && ( idx === parts.length - 1 );

    if ( !idx || isFirstAndLastItem ) {
      return item;
    }
    const preparedPart = item.trim().replace(
      item[0], item[0]?.toUpperCase()
    );
    return `${ acc }${ preparedPart }`;
  }, "");
}

/**
* Функция мемоизации ( кеширование на стороне клиента, кешируется до перезагрузки страници )
*
* @param { Function } fn
* @return { Function }
*
* @example memo( ( params ) => userApi.get( params ) );
*
* @throws Error|TypeError
**/
export function memo( fn ) {
  if ( !fn ) {
    throw Error();
  }

  if ( typeof fn !== "function" ) {
    throw TypeError();
  }
  const memoCache = {};
  return function () {
    const key = JSON.stringify( arguments );

    if ( !memoCache[ key ] ) {
      memoCache[ key ] = fn.apply( null, arguments );
    }
    return memoCache[ key ];
  };
}
