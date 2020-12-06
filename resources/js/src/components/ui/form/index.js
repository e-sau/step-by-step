import React from "react";
import PropTypes from "prop-types";
import { TextField, Typography } from "@material-ui/core";
import { Form as StyledForm } from "./styled.sc";

import { ValidateResult } from "../../../common/validators";
import { Model } from "../../../models/Model";

export function Form( props ) {
  const { useLabel, model, onChange, errors, fieldsList, variant, inputError } = props;

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
      return acc.add( model.getErrorTranslate( error ) );
    }, new Set() );

    return (
      <Typography variant="body2" color="error">
        { [ ...setOfErrors ].join("</br>") }
      </Typography>
    );
  }

  /**
     * Рендер полей формы
     * @return { JSX[] }
     **/
  function renderInputs() {
    return fieldsList.map( field => {
      const { attribute, ...rest } = field;
      const value = ( model[ attribute ] || "" );
      const errors = model.getErrors().find(
        ([ key ]) => key === attribute
      );
      const [, validateResult = new ValidateResult(true ) ] = errors || [];

      return (
        <TextField
          { ...rest }
          value={ value }
          key={ attribute }
          name={ attribute }
          autoComplete="false"
          variant={ variant }
          onChange={ handleChange }
          label={ useLabel && model.getLabel( attribute ) }
          error={ !validateResult.isValid() }
          helperText={ inputError && validateResult.getMessage() }
        />
      );
    });
  }

  return (
    <StyledForm autoComplete="off">
      { renderInputs() }
      { prepareErrorsMessage() }
    </StyledForm>
  );
}

Form.defaultProps = {
  variant: "outlined",
  useLabel: true,
  inputError: true
};

Form.propTypes = {
  inputError: PropTypes.bool,
  useLabel: PropTypes.bool,
  variant: PropTypes.string,
  model: PropTypes.instanceOf( Model ).isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  fieldsList: PropTypes.arrayOf(
    PropTypes.shape({
      attribute: PropTypes.string.isRequired,
      required: PropTypes.bool,
      type: PropTypes.string,
      placeholder: PropTypes.string,
    }),
  ).isRequired
};
