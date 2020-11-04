/**
 * Простой класс, который будет результатом валидации
 **/
export function ValidateResult(valid, validator, message = null ) {
    this.valid = valid;
    this.validator = validator;
    this.message = message;
}

ValidateResult.prototype.getValidator = function () {
    return this.validator;
};
ValidateResult.prototype.isValid = function () {
   return this.valid;
};
ValidateResult.prototype.setMessage = function ( message ) {
    this.message = message;
};
ValidateResult.prototype.getMessage = function () {
    return this.message;
};

/**
 * Проверка обязательности поля
 * @param { any } value
 * @return { ValidateResult }
 **/
export function required( value ) {
    const message = "Поле не может быть пустым!";
    if ( typeof value === "string" ) {
        return new ValidateResult( Boolean( value.trim() ), "required", message);
    }
    return new ValidateResult( (value === 0 || Boolean(value)), "required", message );
}
/**
 * Проверка длины строки
 * @param { Number } min
 * @param { Number } max
 *
 * @return { Function }
 * @throws Error
 **/
export function getLengthValidator( min, max= 255 ) {
    const message = `Поле должно быть больше ${ min - 1 } и меньше ${ max }}`;
    if ( !( typeof min === "number") || !( typeof max === "number")) {
        throw new Error("length must be number!");
    }
    return function length( value ) {
        if ( typeof value !== "string" ) {
            return new ValidateResult( false, "length", message );
        }
        const isValid = ( value.length >= min && value.length <= max );
        return new ValidateResult( isValid, "length", message );
    }
}
/**
 * Проверка длины строки
 * @param { RegExp } regexp
 *
 * @return { Function }
 * @throws Error
 **/
export function getMatchValidator( regexp ) {
    if ( !( regexp instanceof RegExp ) ) {
        throw new Error( "invalid RegExp!" );
    }
    return function match( value ) {
        return new ValidateResult( regexp.test( value ), "match", "Не корректное значение поля" );
    }
}
/**
 * Проверка на совпадение параметров
 * @param { String } compareWith
 *
 * @return { Function }
 * @throws Error
 **/
export function getCompareValidator( compareWith ) {
    if ( !compareWith ) {
        throw new Error("Missing argument error!");
    }
    return function compare( value ) {
        const message = `Поле ${ this.getLabel( compareWith ) } и данное поле не равны!`;
        /** контекст проброшен через вызов функции в обьекте DTO, и является контекстом DTO */
        return new ValidateResult(
            ( this[ compareWith ] === value ), "compare", message
        );
    }
}
