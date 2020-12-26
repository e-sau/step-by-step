import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";
import MomentUtils from "@date-io/moment";
import { Typography } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import { User } from "../models/User";
import { Form } from "./ui/form";
import { Button } from "./ui/Button";
import { Model } from "../models/Model";

const ControlsContainer = styled("div")`
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 20px;
`;

const GridContainer = styled("div")`
  display: grid;
  grid-template-rows: max-content;
`;

export function SignupFormWrapper( props ) {
  /** @type User **/
  const { user, onChange, onSubmit, errors } = props;
  const [ date, setDate ] = useState( moment() );

  const fieldsList = [
    { attribute: "name", required: true },
    { attribute: "surname", required: true },
    { attribute: "password", required: true, type: "password"  },
    { attribute: "rePassword", required: true, type: "password" },
    { attribute: "email", required: true, type: "email", placeholder: "example@mail.com" },
  ];

  /**
   * Установить дату рождения
   * @param { Object } date
   * @return { void }
   **/
  function setBirthDate( date ) {
    if ( date ) {
      user.birthday = date.format( Model.DATE_FORMAT );
      setDate( date );
    } else {
      user.birthday = "";
    }
  }

  return (
    <Fragment>
      <Typography variant="h5" align="center">Регистрация</Typography>

      <GridContainer>
        <Form
          model={ user }
          onChange={ onChange }
          fieldsList={ fieldsList }
          errors={ errors }
        />
        <MuiPickersUtilsProvider locale="ru-Ru" utils={ MomentUtils }>
          <KeyboardDatePicker
            label={ user.getLabel("birthday") }
            format="DD-MM-YYYY"
            value={ date }
            onChange={ setBirthDate }
            cancelLabel={ "Отмена" }
          />
        </MuiPickersUtilsProvider>
      </GridContainer>

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
