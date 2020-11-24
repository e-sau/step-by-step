import React from "react";
import { connect } from "react-redux";
import { AccountPage } from "../components/accountPage";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const {
        auth: { isAuthorized },
    } = state;

    return {
        isAuthorized,
    };
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps )( AccountPage );
