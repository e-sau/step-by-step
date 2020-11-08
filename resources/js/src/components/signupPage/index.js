import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { FormContainer, FormLeftSide, FormRightSide, HelperLinks, PageContainer } from "./styled.sc";
import { SignupForm } from "./form";
import { User } from "../../models/User";

/**
 * Думаю подробить, но когда дизайн будем навешивать везде
 * @param { Object } props
 * @return { JSX.Element }
 **/
export function SignupPage( props ) {
    const { user, onChange, onSubmit, errors } = props;

    return (
        <PageContainer>
            <FormContainer>
                <FormLeftSide>
                    <article>{/** some text */}</article>
                    <HelperLinks>
                        <Link to={ "/restore/password" }>
                            <Typography align="center">Забыли пароль?</Typography>
                        </Link>
                        <Link to={ "/login" }>
                            <Typography align="center">Авторизация</Typography>
                        </Link>
                    </HelperLinks>
                </FormLeftSide>
                <FormRightSide>
                    <SignupForm
                        user={ user }
                        errors={ errors }
                        onChange={ onChange }
                        onSubmit={ onSubmit }
                    />
                </FormRightSide>
            </FormContainer>
        </PageContainer>
    );
}

SignupPage.propTypes = {
    user: PropTypes.instanceOf( User ),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}
