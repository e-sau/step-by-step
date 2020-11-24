import React from "react";
import { connect } from "react-redux";
import { Header } from "../layout/Header";

/** @return { Object } **/
function mapStateToProps( state ) {
    const { auth: { userData, isAuthorized } } = state;
    return {
        isAuthorized,
        model: userData
    };
}

export default connect( mapStateToProps )( Header );
