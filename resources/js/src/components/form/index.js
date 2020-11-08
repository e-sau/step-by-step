import React from "react"
import PropTypes from "prop-types";
import { TextField, Typography } from "@material-ui/core";
import { Form as StyledForm } from "./styled.sc";

import { ValidateResult } from "../../common/validators";
import { DTO } from "../../dto/DTO";

export function Form( props ) {
    const { dto, onChange, errors, fieldsList } = props;

    /**
     * Обработчик изменения данных формы
     * @param { Event } event
     * @return { void }
     **/
    function handleChange( event ) {
        const { target: { name, value } } = event;
        onChange( name, value );
    }

    /**
     * Отображение ошибок с бекеа
     * @return { JSX.Element|null }
     **/
    function prepareErrorsMessage() {
        if ( !Array.isArray( errors ) ) {
            return null;
        }
        const setOfErrors = errors.reduce( (acc, error) => {
            return acc.add( dto.getErrorTranslate( error ) )
        }, new Set() );

        return (
            <Typography variant="body2" color="error">
                { [ ...setOfErrors ].join("</br>") }
            </Typography>
        );
    }

    /**
     * Рендер нужных полей
     * @param { DTO } user
     * @param { Array } fields
     *
     * @return { JSX[] }
     * @todo ненравится функция, хочу переделать, если ктото придумает красивое решение и переделает, заранее спасибо!
     **/
    function renderInputs( user, fields ) {
        return fields.map( field => {
            const { attribute, ...rest } = field;
            const value = ( user[ attribute ] || "" );
            const errors = dto.getErrors().find(([ key ]) => key === attribute );
            const [ _, validateResult = new ValidateResult(true ) ] = errors || [];

            return (
                <TextField
                    { ...rest }
                    value={ value }
                    key={ attribute }
                    name={ attribute }
                    autoComplete="false"
                    onChange={ handleChange }
                    label={ user.getLabel( attribute ) }
                    error={ !validateResult.isValid() }
                    helperText={ validateResult.getMessage() }
                />
            )
        });
    }

    return (
        <StyledForm autoComplete="off">
            { renderInputs( dto, fieldsList ) }
            { prepareErrorsMessage() }
        </StyledForm>
    );
}

Form.propTypes = {
    dto: PropTypes.instanceOf(DTO).isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.array,
    fieldsList: PropTypes.array.isRequired
};
