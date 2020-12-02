import React from "react";
import { connect } from "react-redux";
import { faBullhorn, faCheckSquare, faEnvelope, faMedal, faPenSquare, faUser } from "@fortawesome/free-solid-svg-icons";

import { AccountPage } from "../components/accountPage";
import ProfileEditFormContainer from "../containers/ProfileEditFormContainer";
import {bindActionCreators} from "redux";
import {changeModelAttribute} from "../store/user/actions";
// import {submit} from "../store/auth/actions";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { isAuthorized }, user: { model } } = state;

    /**
     * Массив доступных категорий для боковой панели
     * @type Array
     **/
    const NAV_ITEMS = [
        { id: 1, label: "Профиль", icon: faUser, component: ProfileEditFormContainer },
        { id: 2, label: "Сообщения", icon: faEnvelope, component: null },
        { id: 3, label: "Завершенные предметы", icon: faCheckSquare },
        { id: 4, label: "Доступные предмет", icon: faPenSquare, component: null },
        { id: 5, label: "Достижения", icon: faMedal, component: null },
        { id: 6, label: "Оповещения", icon: faBullhorn, component: null },
    ];

    return {
        isAuthorized,
        user: model,
        navList: NAV_ITEMS
    };
}

const mapDispatchToProps = ( dispatch ) =>
    bindActionCreators({
        onChange: changeModelAttribute,
        onSubmit: () => console.log( 1 ),
    }, dispatch );

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( AccountPage );
