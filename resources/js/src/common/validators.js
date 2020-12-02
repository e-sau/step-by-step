/**
 * Простой класс, который будет результатом валидации
 **/
export class ValidateResult {
    /**
     * Результат валидации
     * @type boolean
     **/
    _valid;
    /**
     * Название валидатора
     * @type string
     **/
    _validator
    /**
     * Ошибка валидации
     * @type string
     **/
    _message;

    constructor( valid, validator, message ) {
        this._valid = valid;
        this._validator = validator;
        this._message = message;
    }

    getValidator() {
        return this._validator;
    }

    isValid() {
        return this._valid;
    }

    setMessage( message ) {
        this._message = message;
    }

    getMessage () {
        return this._message;
    }

}

/**
 * Проверка обязательности поля
 * @param { any } value
 * @return { ValidateResult }
 **/
export function required(value ) {
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
    };
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
    };
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
    };
}

/**
 * @param { Array } typesList
 * @param { Number } maxSize
 *
 * @return { Function }
 * @throws Error
 * @todo add tests
 **/
export function getFileValidator( typesList, maxSize ) {
    return function file( value ) {
        const isFile = ( value instanceof File );
        const isValidSize = ( maxSize ? value.size <= maxSize : true );
        const isValidType = typesList.some( type => value.type === type );

        return new ValidateResult(
            isFile && isValidSize && isValidType,
            "file",
            `Файл должен быть следующих типов ${ typesList.join(";") } и быть меньше ${ Math.floor( maxSize / 1e6 ) } мб!`
        );
    }
}
