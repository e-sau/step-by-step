import React from "react";
import PropTypes from "prop-types";
import { User } from "../../../models/User";
import { CardGrid } from "./styled.sc";

export function ProfileCard( props ) {
    const { user } = props;

    return (
        <CardGrid>
            <div className="photo_container" >
                <img src={ user.photo } className="photo" alt="photo" />
            </div>
            <div className="profile_fio">
                { user.name } { user.surname }
            </div>
            <div className="profile_age">
                { user.getAge() }
            </div>
            <div>
                { /*  @todo https://igorskipper.atlassian.net/browse/IS100-40  */}
            </div>
        </CardGrid>
    );
}

ProfileCard.propTypes = {
    user: PropTypes.instanceOf( User )

};
