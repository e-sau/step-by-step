import React from "react";
import PropTypes from "prop-types";
import { Model } from "../../models/Model";
import { Link } from "react-router-dom";
import { FormContainer, ControlsContainer } from "./styled.sc";
import { Button, Typography } from "@material-ui/core";
import { Form } from "../form";

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
                <Button className="login" variant="contained" color="primary">
                    <span className="login_link" onClick={ onLogin } >
                        Войти
                    </span>
                </Button>

                <Link className="link" to={ "/signup" }>
                    <Typography align="center">Регистрация</Typography>
                </Link>
            </ControlsContainer>
        </FormContainer>
    );
}

LoginForm.propTypes = {
    user: PropTypes.instanceOf( Model ),
    onChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
}
