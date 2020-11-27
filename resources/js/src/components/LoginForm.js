import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Model } from "../models/Model";
import { Link } from "./ui/Link";
import { Button } from "./ui/Button";
import { Form } from "./ui/form";

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
 * @return { JSX.Element }
 **/
export function LoginForm( props ) {
    const { user, onChange, onLogin, errors } = props;

    const fieldsList = [
        { attribute: "email", required: true, type: "email", placeholder: "E-mail" },
        { attribute: "password", required: true, type: "password", placeholder: "Пароль"  },
    ];

    return (
        <FormContainer>
            <Form
                model={ user }
                onChange={ onChange }
                fieldsList={ fieldsList }
                errors={ errors }
                useLabel={ false }
                inputError={ false }
            />
            <ControlsContainer>
                <Button onClick={ onLogin } text={ "Войти" } color="primary">
                    Войти
                </Button>
                <Link className="link" uri={ "/signup" } text={ "Регистрация" }/>
            </ControlsContainer>
        </FormContainer>
    );
}

LoginForm.propTypes = {
    user: PropTypes.instanceOf( Model ),
    onChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
}
