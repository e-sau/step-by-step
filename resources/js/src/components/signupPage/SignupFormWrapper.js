import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { ControlsContainer } from "./styled.sc";
import { User } from "../../models/User";
import { Form } from "../ui/form";
import { Button } from "../ui/Button";

export function SignupFormWrapper( props ) {
  /** @type User **/
  const { user, onChange, onSubmit, errors } = props;

  const fieldsList = [
    { attribute: "login", required: true },
    { attribute: "name", required: true },
    { attribute: "surname", required: true },
    { attribute: "birthday", required: true, type: "date", placeholder: ""},
    { attribute: "password", required: true, type: "password"  },
    { attribute: "rePassword", required: true, type: "password" },
    { attribute: "email", required: true, type: "email", placeholder: "example@mail.com" },
    { attribute: "photo", required: true, value:"https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_avatar___robot_robo_help_customer_messenger-512.png"},
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
