/**
 * Родительский класс для всех обьектов работы с данными
 * @class DTO
 **/
export class DTO {
    _rules = [];
    _errors = [];

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
     * @return { Boolean }
     **/
    validateAttribute( field, validators ) {
        console.log({ validators });
        /** обратить внимание, все функции валидаторы могут обратится к this обьекта DTO */
        const isValid = validators.every( func => func.call( this, this[ field ] ) );

        if ( !isValid ) {
            this._errors.push( field );
        } else {
            this._errors = this._errors.filter( _field => _field !== field );
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
