import React, { useState } from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import { User } from "../../models/User";
import { Form } from "../ui/form";
import { Button } from "../ui/Button";
import { Spacer } from "../ui/Spacer";
import { GridContainer, Wrapper } from "./styled.sc";

import { getFileValidator } from "../../common/validators";
import { objectClone } from "../../common/helpers";
import { Loader } from "../ui/Loader";

export function ProfileEditForm( props ) {
  /** @type User **/
  const { user, updateProfile, photoSelect, errors, userIsFetching } = props;
  if ( userIsFetching ) {

    return <Loader/>;
  }

  const [ userModel, setUserModel ] = useState( User.buildUser(user.getData()) );
  const [ date, setDate ] = useState( moment() );
  const [ warning, setPhotoWarning ] = useState( "" );

  const fieldsList = [
    { attribute: "name" },
    { attribute: "surname" },
    { attribute: "email", type: "email", placeholder: "example@mai.com" },
  ];

  /**
   * Обработчик выбора фотографии
   * @param { Event } event
   * @return { void }
   **/
  function handleSelectPhoto( event ) {
    const file = event.target.files[ 0 ] || {};
    const validator = getFileValidator( User.PHOTO_TYPES, User.PHOTO_KB_SIZE );
    const validateResult = validator( file );

    if ( validateResult.isValid() ) {
      photoSelect( file );
    } else {
      setPhotoWarning( validateResult.getMessage() );
    }
  }

  /**
   * Обновить состояние модели
   * @return { void }
   **/
  function updateModelView() {
    setUserModel(
      objectClone( userModel, Object.entries( userModel.getData() ) )
    );
  }

  /**
   * Обработчик изменения данных пользователя
   * @param { String } key
   * @param { any } value
   * @return { void }
   **/
  function handleChange( key, value ) {
    userModel[ key ] = value;
    updateModelView();
  }

  /**
   * Обработчик сохранения данных
   * @return { void }
   **/
  function handleSave() {
    if ( userModel.validate( User.UPDATE_SCENARIO ) ) {
      console.log({ date });
      userModel.birthday = date.format("YYYY-MM-DD HH:mm:ss");
      updateProfile( userModel );
    } else {
      updateModelView();
    }
  }

  return (
    <GridContainer>
      <div className="photo_container">

        <label className="content">
          <img src={ user.avatar } className="content_item" alt="photo" />
          <Wrapper className="content_wrapper">
            <ListItemIcon className={ "item_icon" }>
              <FontAwesomeIcon icon={ faPlus } />
            </ListItemIcon>
          </Wrapper>
          <input type="file"
            accept={ User.PHOTO_TYPES.join(",") }
            className="hidden" onChange={ handleSelectPhoto }
          />
        </label>

        <Spacer size={ 20 }/>
        <span>Редактировать фото</span>
        <Typography variant="body2" color="error">
          { warning }
        </Typography>
      </div>

      <div className="form_container">
        <Spacer size={ 48 }/>
        <Form
          model={ userModel }
          onChange={ handleChange }
          fieldsList={ fieldsList }
          errors={ errors }
        />
        <MuiPickersUtilsProvider locale="ru-Ru" utils={ MomentUtils }>
          <KeyboardDatePicker
            label={ userModel.getLabel("birthday") }
            format="DD-MM-YYYY"
            value={ date }
            onChange={ setDate }
            cancelLabel={ "Отмена" }
          />
        </MuiPickersUtilsProvider>
        <Spacer size={ 32 }/>
      </div>

      <Button color="primary" onClick={ handleSave }>Сохранить</Button>
    </GridContainer>
  );
}

ProfileEditForm.propTypes = {
  userIsFetching: PropTypes.bool.isRequired,
  user: PropTypes.instanceOf( User ).isRequired,
  updateProfile: PropTypes.func.isRequired,
  photoSelect: PropTypes.func.isRequired,
  errors: PropTypes.array
};
