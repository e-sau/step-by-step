import React from "react";
import { connect } from "react-redux";
import { Header } from "../layout/Header";

/** @return { Object } **/
function mapStateToProps( state ) {
    const { auth: { isAuthorized }, user: { model } } = state;
    return {
        isAuthorized,
        model: model
    };
}

export default connect( mapStateToProps )( Header );
