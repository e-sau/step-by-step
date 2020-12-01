/**
 * Обьект содержащий функции хелперы для обьектов
 * @todo вложенные обьекты будут иметь старые ссылки! при необходимости глубокого копирования ставим immutable.js или рекурсивно обновляем сами
 * @type Object
 **/
export const object = {
    /**
     * Обновление ссылки на обьект
     * @param { Object } object
     * @param { Array } properties
     * @return { User }
     *
     * @throws TypeError
     **/
    update( object, properties= [] ) {

        if ( !object || typeof object !== "object" ) {
            throw new TypeError("First argument must be Object type!");
        }

        if ( !Array.isArray( properties ) ) {
            throw new TypeError("Second argument must be Array type!");
        }

        /**
         * Установка дескрипторов атрибуду обьекта
         * @param { any } value
         * @return { Object }
         **/
        function setPropertyDescriptors( value ) {
            return { value, enumerable: true, configurable: true, writable: true };
        }
        const combinedProperties = [ ...Object.entries( object ), ...properties ];
        const configuredProperties = combinedProperties.reduce((acc, item) => {
            const [ key, value ] = item;
            return { ...acc, [key]: setPropertyDescriptors( value ) };
        }, {});
        return Object.create( object, configuredProperties );
    },

    /**
     * Слишком узконаправленная функция.
     * Суть в том, чтоб все обьекты которые приходят с бека в snake_case нам удобнее трансформировать в camelCase
     *
     * Функция трансформации ключей обьекта, по правилам функции которая переданна вторым аргументом
     * @param { Object } input
     * @param { Function } transformFunc
     *
     * @return { Object }
     * @throws Error|TypeError
     **/
    keysTransform( input, transformFunc ) {
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
};

/**
 * Обьект содержащий функции хелперы для строк
 * @type Object
 **/
export const string = {
    /**
     * Простой алгоритм конвертации snakeCase нотации в camelCase
     * @param { String } string
     *
     * @throws Error|TypeError
     **/
    snakeCaseToCamelCase( string ) {
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
};

/**
 * Обьект содержащий функции хелперы для функций
 * @type Object
 **/
export const func = {
    /**
     * Функция мемоизации ( кеширование на стороне клиента, кешируется до перезагрузки страници )
     *
     * @param { Function } fn
     * @return { Function }
     *
     * @example Пример вызова функции, создаем переменную, и замыкаем то что хотим вызвать
     *          const someMemo = memo( ( params ) => userApi.get( params ) );
     *
     * @throws Error|TypeError
     **/
    memo( fn ) {
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
};
