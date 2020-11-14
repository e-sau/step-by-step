/**
 * Простой алгоритм конвертации snakeCase нотации в camelCase
 * @param { String } string
 *
 * @todo протестировать
 **/
export function snakeCaseToCamelCase( string ) {
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
