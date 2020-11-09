/**
 * Простой класс, который будет результатом валидации
 **/
export function ValidateResult( valid, validator, message = null ) {
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
