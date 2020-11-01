import React, { Fragment } from "react"
import PropTypes from "prop-types";
import { Button, TextField, Typography } from "@material-ui/core";
import { ControlsContainer, Form } from "../styled.sc";
import { User } from "../../../dto/User";

export function SignupForm( props ) {
    /** @type User **/
    const { dto, onChange, onSubmit } = props;
    const errors = dto.getErrors();

    function handleChange( event ) {
        const { target: { name, value } } = event;
        onChange( name, value );
    }

    function renderInputs( user ) {
        const fieldsList = [
            { attribute: "username", required: true, },
            { attribute: "password", required: true, type: "password"  },
            { attribute: "rePassword", required: true, type: "password" },
            { attribute: "email", required: true, type: "email", placeholder: "example@mai.com" },

            { attribute: "name" },
            { attribute: "surname" },
            { attribute: "patronymic" },
            { attribute: "bio", multiline: true },
        ];

        return fieldsList.map( field => {
            const { attribute, ...rest } = field;
            const value = ( user[ attribute ] || "" );

            return (
                <TextField
                    { ...rest }
                    value={ value }
                    key={ attribute }
                    name={ attribute }
                    autoComplete="false"
                    onChange={ handleChange }
                    label={ user.getLabel( attribute ) }
                    error={ errors.includes( attribute ) }
                />
            )
        });
    }

    return (
        <Fragment>
            <Typography variant="h5" align="center">Регистрация</Typography>
            <Form autoComplete="off">
                { renderInputs( dto ) }
            </Form>
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
};
