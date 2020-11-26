import React from "react";
import PropTypes from "prop-types";
import { User } from "../../models/User";

export function ProfileCard( props ) {
    const { user } = props;
    /*  @todo https://igorskipper.atlassian.net/browse/IS100-39  */
    return 1;
}

ProfileCard.propTypes = {
    user: PropTypes.instanceOf( User )
}
