import React, { Fragment } from "react"
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { ControlsContainer } from "../styled.sc";
import { User } from "../../../dto/User";
import { Form } from "../../form";

export function SignupForm( props ) {
    /** @type User **/
    const { dto, onChange, onSubmit, errors } = props;

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
                dto={ dto }
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

SignupForm.propTypes = {
    dto: PropTypes.instanceOf( User ).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array
};
