/**
 * Функция мемоизации ( кеширование на стороне клиента, кешируется до перезагрузки страници )
 *
 * @param { Function } fn
 * @return { Function }
 *
 * @example Пример вызова функции, создаем переменную, и замыкаем то что хотим вызвать
 *          const someMemo = memo( ( params ) => userApi.get( params ) );
 **/
export default function memo( fn ) {
    const memoCache = {};
    return function () {
        const key = JSON.stringify( arguments );
        let value = memoCache[ key ] || null;
        if ( !value ) {
            value = fn.apply( null, arguments );
            memoCache[ key ] = value;
        }
        return value;
    }
}
