/**
 * Проверка обязательности поля
 * @param { any } value
 * @return { Boolean }
 **/
export function required(value ) {
    if ( typeof value === "string" ) {
        return Boolean( value.trim() );
    }
    return ( value === 0 || Boolean(value) );
}
/**
 * Проверка длины строки
 * @param { Number } length
 * @return { Function }
 *
 * @throws Error
 **/
export function length( length ) {
    if ( !( typeof length === "number") ) {
        throw new Error("length must be number!");
    }
    return function ( value ) {
        if ( typeof value !== "string" ) {
            return false
        }
        return ( value.length >= length );
    }
}
/**
 * Проверка длины строки
 * @param { RegExp } regexp
 * @return { Function }
 *
 * @throws Error
 **/
export function match( regexp ) {
    if ( !( regexp instanceof RegExp ) ) {
        throw new Error( "invalid RegExp!" );
    }
    return function ( value ) {
        return regexp.test( value );
    }
}
/**
 * Проверка на совпадение параметров
 * @param { String } attribute
 * @return { Function }
 *
 * @throws Error
 **/
export function compare( attribute ) {
    if ( !attribute ) {
        throw new Error("Missing argument error!");
    }
    return function ( value ) {
        /** контекст проброшен через вызов функции в обьекте DTO, и является контекстом DTO */
        return this[ attribute ] === value;
    }
}
