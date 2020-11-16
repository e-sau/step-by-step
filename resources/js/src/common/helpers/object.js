/**
 * Обновление ссылки на обьект
 * @param { Object } object
 * @param { Object } properties
 * @return { User }
 **/
export function update( object, properties= [] ) {
    const configuredProperties = properties.reduce((acc, item) => {
        const [ key, value ] = item;
        return { ...acc, [key]: setPropertyDescriptors( value ) };
    }, {})
    return Object.create( object, configuredProperties );
}

/**
 * Установка дескрипторов атрибуду обьекта
 * @param { any } value
 * @return { Object }
 **/
function setPropertyDescriptors( value ) {
    return {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    };
}

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
export function keysTransform( input, transformFunc ) {
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
