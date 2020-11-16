/**
 * Обьект содержащий функции хелперы для обьектов
 * @type Object
 **/
export const object = {
    /**
     * Обновление ссылки на обьект
     * @param { Object } object
     * @param { Object } properties
     * @return { User }
     **/
    update( object, properties= [] ) {
        /**
         * Установка дескрипторов атрибуду обьекта
         * @param { any } value
         * @return { Object }
         **/
        function setPropertyDescriptors( value ) {
            return { value, enumerable: true, configurable: true, writable: true };
        }

        const configuredProperties = properties.reduce((acc, item) => {
            const [ key, value ] = item;
            return { ...acc, [key]: setPropertyDescriptors( value ) };
        }, {})
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
     * @throws Error
     **/
    keysTransform( input, transformFunc ) {
        if ( arguments.length < 2 ) {
            throw new Error("Missing argument error");
        }

        if ( !input || typeof input !== "object" ) {
            throw new Error("Second argument must be Object");
        }

        if ( !transformFunc || typeof transformFunc !== "function" ) {
            throw new Error("Second argument must be function");
        }

        return Object.entries( input ).reduce(( acc, [ key, value] ) => {
            return {
                ...acc,
                [ transformFunc(key) ]: value
            };
        }, {});
    }
}

/**
 * Обьект содержащий функции хелперы для строк
 * @type Object
 **/
export const string = {
    /**
     * Простой алгоритм конвертации snakeCase нотации в camelCase
     * @param { String } string
     *
     * @todo протестировать
     **/
    snakeCaseToCamelCase( string ) {
        const parts = String( string ).split( "_" );

        return parts.reduce( ( acc, item, idx ) => {
            if ( !idx ) {
                return item;
            }
            const preparedPart = item.trim().replace(
                item[0], item[0].toUpperCase()
            );
            return `${ acc }${ preparedPart }`;
        }, "")
    }
}
