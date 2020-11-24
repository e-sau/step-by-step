import React, { Fragment } from "react"
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { ControlsContainer } from "./styled.sc";
import { User } from "../../models/User";
import { Form } from "../ui/form";

export function SignupFormWrapper( props ) {
    /** @type User **/
    const { user, onChange, onSubmit, errors } = props;

    const fieldsList = [
        { attribute: "name", required: true, },
        { attribute: "password", required: true, type: "password"  },
        { attribute: "rePassword", required: true, type: "password" },
        { attribute: "email", required: true, type: "email", placeholder: "example@mai.com" },
    ];

    return (
        <Fragment>
            <Typography variant="h5" align="center">Регистрация</Typography>
            <Form
                model={ user }
                onChange={ onChange }
                fieldsList={ fieldsList }
                errors={ errors }
            />
            <ControlsContainer>
                <Button variant="contained" color="primary" onClick={ onSubmit }>Регистрация</Button>
            </ControlsContainer>
        </Fragment>
    );
}

SignupFormWrapper.propTypes = {
    user: PropTypes.instanceOf( User ).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array
};
