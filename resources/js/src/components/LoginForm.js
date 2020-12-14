import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "./ui/Link";
import { Button } from "./ui/Button";
import { Form } from "./ui/form";
import { User } from "../models/User";
import { object } from "../common/helpers";

export const FormContainer = styled("div")`
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto;
`;

export const ControlsContainer = styled("div")`
    display: grid;
    grid-template-columns: 66% auto;
    align-items: center;

    @media (max-width: 420px) {
      grid-template-columns: 100% auto;
    }
`;

/**
 * Думаю подробить, но когда дизайн будем навешивать везде
 * @param { Object } props
 * @return { JSX.Element|null }
 **/
export function LoginForm( props ) {
  const [ model, setModel ] = useState(new User);
  const { isAuthorized, onLogin, errors } = props;

  if ( isAuthorized ) {
    return null;
  }

  const fieldsList = [
    { attribute: "email", required: true, type: "email", placeholder: "E-mail" },
    { attribute: "password", required: true, type: "password", placeholder: "Пароль"  },
  ];

  /**
   * Обработчик авторизации
   * @return { void }
   **/
  function handleLogin() {
    onLogin( model.email, model.password );
  }

  /**
   * Обработчик изменения данных авторизации
   * @return { void }
   **/
  function handleChange( name, value ) {
    model[ name ] = value;
    setModel( object.update( model ) );
  }

  return (
    <FormContainer>
      <Form
        model={ model }
        onChange={ handleChange }
        fieldsList={ fieldsList }
        errors={ errors }
        useLabel={ false }
        inputError={ false }
      />
      <ControlsContainer>
        <Button onClick={ handleLogin } text={ "Войти" } color="primary">
          Войти
        </Button>
        <Link className="link" uri={ "/signup" } text={ "Регистрация" }/>
      </ControlsContainer>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  errors: PropTypes.array,
  isAuthorized: PropTypes.bool.isRequired,
};
