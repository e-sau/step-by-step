/**
 * Родительский класс для всех обьектов работы с данными
 * @class DTO
 **/
export class DTO {
    _rules = [];
    _errors = [];

    /** Ошибки валидации с бека, и их перевод для пользователя */
    _errorTranslates = {
        "Error text from backend": "Какойто текст",
        default: "Произошла неизвестная ошика"
    }

    /**
     * Переод ошибок валидации с бека
     * @return { String }
     **/
    getErrorTranslate( error ) {
        return this._errorTranslates[ error ] || this._errorTranslates.default
    }

    /**
     * Валидация всех атрибутов модели
     * @return { Boolean }
     **/
    validate() {
        this._errors = [];
        this._rules.forEach( ( record ) => {
            const [ field, validators ] = record;
            this.validateAttribute( field, validators );
        });
        return ( this._errors.length === 0 );
    }

    /**
     * Валидация конкретного атрибута модели
     * @param { String } field
     * @param { Array } validators
     *
     * @return { void }
     **/
    validateAttribute( field, validators ) {
        let result = null;
        /** обратить внимание, все функции валидаторы могут обратится к this обьекта DTO */
        const isValid = validators.every( func => {
           /** @type ValidateResult */
           const validateResult = func.call( this, this[ field ]);
           result = validateResult.isValid() ? null : validateResult;
           return validateResult.isValid();
        });

        if ( !isValid ) {
            this._errors.push([ field, result ]);
        } else {
            this._errors = this._errors.filter( ([ attribute ]) => attribute !== field );
        }
    }

    /**
     * Получить валидаторы для атрибута
     * @param { String } field
     *
     * @return { Array }
     **/
    findValidators( field ) {
        const validators = this._rules.find( record => record[ 0 ] === field );
        return validators ? validators[ 1 ] : [];
    }

    /**
     *
     * Получить ошибки валидаций
     * @return { Array }
     **/
    getErrors() {
        return this._errors;
    }

    /**
     * Получить получить список атрибутов модели
     * @return { Array }
     **/
    getAttributes() {
        return Object.entries( this );
    }

    /**
     * Наименования атрибутов для вывода в интерфейс
     * @return { Object }
     **/
    attributeLabels() {
        return {};
    }

    /**
     * Получить наименование по атрибуту
     * @return { String }
     **/
    getLabel( attribute ) {
        return ( this.attributeLabels()[ attribute ] || "Не указанно");
    }

    /**
     * Получить обьект содержащий лиш поля модели
     * @return { Object }
     **/
    getData() {
        return {};
    }
}
