import React from "react";
import PropTypes from "prop-types";
import { User } from "../../models/User";
import { RatingStars } from "../RatingStars";
import { CardGrid } from "./styled.sc";
import { Spacer } from "../ui/Spacer";

export function ProfileCard( props ) {
  const { user } = props;

  return (
    <CardGrid>
      <div className="photo_container" >
        <img src={ user.avatar } className="photo" alt="photo" />
      </div>

      <div className="profile_fio">
        { user.name } { user.surname }
      </div>

      <div className="profile_age">
        { user.age }
      </div>

      <div className="profile_rating">
        <Spacer size={ 16 }/>
        <RatingStars/>
      </div>
    </CardGrid>
  );
}

ProfileCard.propTypes = {
  user: PropTypes.instanceOf( User )
};
