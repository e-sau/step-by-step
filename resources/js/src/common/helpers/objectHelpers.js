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
    },{})
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
