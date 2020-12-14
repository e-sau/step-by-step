import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

import { User } from "../../models/User";
import { Form } from "../ui/form";
import { Button } from "../ui/Button";
import { Spacer } from "../ui/Spacer";
import { GridContainer, Wrapper } from "./styled.sc";
import { Typography } from "@material-ui/core";
import { getFileValidator } from "../../common/validators";

export function ProfileEditForm( props ) {
  const [ warning, setPhotoWarning ] = useState( "" );
  /** @type User **/
  const { user, changeModelAttribute, updateProfile, photoSelect, errors } = props;

  const fieldsList = [
    { attribute: "name" },
    { attribute: "surname" },
    { attribute: "email", type: "email", placeholder: "example@mai.com" },
  ];

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
          model={ user }
          onChange={ changeModelAttribute }
          fieldsList={ fieldsList }
          errors={ errors }
        />
        <Spacer size={ 32 }/>
      </div>

      <Button color="primary" onClick={ updateProfile }>Сохранить</Button>
    </GridContainer>
  );
}

ProfileEditForm.propTypes = {
  user: PropTypes.instanceOf( User ).isRequired,
  changeModelAttribute: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  photoSelect: PropTypes.func.isRequired,
  errors: PropTypes.array
};
