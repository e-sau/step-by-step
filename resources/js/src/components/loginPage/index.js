import React from "react";
import PropTypes from "prop-types";
import { User } from "../../dto/User";
import { Link } from "react-router-dom";
import { PageContainer, ControlsContainer } from "./styled.sc";
import { Button, Typography } from "@material-ui/core";
import { Form } from "../form";

/**
 * Думаю подробить, но когда дизайн будем навешивать везде
 * @param { Object } props
 * @return { JSX.Element }
 **/
export function LoginPage( props ) {
    const { user, onChange, onLogin, errors } = props;

    const fieldsList = [
        { attribute: "email", required: true, type: "email", placeholder: "example@mai.com" },
        { attribute: "password", required: true, type: "password"  },
    ];

    return (
        <PageContainer>
            <Typography variant="h5" align="center">Авторизация</Typography>

            <Form
                dto={ user }
                onChange={ onChange }
                fieldsList={ fieldsList }
                errors={ errors }
            />

            <ControlsContainer>
                <Button variant="contained" color="primary" onClick={ onLogin }>Войти</Button>
                <Link to={ "/restore/password" }>
                    <Typography align="center">Забыли пароль?</Typography>
                </Link>
            </ControlsContainer>

        </PageContainer>
    );
}

LoginPage.propTypes = {
    user: PropTypes.instanceOf( User ),
    onChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
}
