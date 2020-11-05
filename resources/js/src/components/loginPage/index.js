import React from "react";
import PropTypes from "prop-types";
import { User } from "../../dto/User";
import { Link } from "react-router-dom";
import { PageContainer, ControlsContainer } from "./styled.sc";
import { Button, TextField, Typography } from "@material-ui/core";
import { Form } from "../signupPage/styled.sc";

/**
 * Думаю подробить, но когда дизайн будем навешивать везде
 * @param { Object } props
 * @return { JSX.Element }
 **/
export function LoginPage( props ) {
    const { user, onChange, onLogin } = props;
    const errors = user.getErrors();

    function handleChange( event ) {
        const { target: { name, value } } = event;
        onChange( name, value );
    }

    console.log({ errors });

    return (
        <PageContainer>
            <Typography variant="h5" align="center">Авторизация</Typography>

                <Form autoComplete="off">
                    <TextField
                        value={ user.username || "" }
                        name={ "username" }
                        autoComplete="false"
                        onChange={ handleChange }
                        label={ user.getLabel( "username" ) }
                        error={ errors.includes( "username" ) }
                    />
                    <TextField
                        value={ user.password || "" }
                        name={ "password" }
                        autoComplete="false"
                        onChange={ handleChange }
                        label={ user.getLabel( "password" ) }
                        error={ errors.includes( "password" ) }
                    />
                </Form>

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
