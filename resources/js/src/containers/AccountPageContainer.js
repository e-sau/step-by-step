import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { faBullhorn, faCheckSquare, faEnvelope, faMedal, faPenSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import { AccountPage } from "../components/accountPage";
import { changeModelAttribute } from "../store/user/actions";

/**
 * Массив доступных категорий для боковой панели
 * @type Array
 **/
const NAV_ITEMS = [
    {
        id: 1, label: "Профиль", icon: faUser,
        component: React.lazy(() => import("../containers/ProfileEditFormContainer" ) )
    },
    {
        id: 2, label: "Сообщения", icon: faEnvelope,
        component: React.lazy(() => import("../components/notFoundPage" ) )
    },
    {
        id: 3, label: "Завершенные предметы", icon: faCheckSquare,
        component:  React.lazy(() => import("../containers/TasksCompleteContainer" ) )
    },
    {
        id: 4, label: "Доступные предмет", icon: faPenSquare,
        component:  React.lazy(() => import("../components/notFoundPage" ) )
    },
    {
        id: 5, label: "Достижения", icon: faMedal,
        component:  React.lazy(() => import("../components/notFoundPage" ) )
    },
    {
        id: 6, label: "Оповещения", icon: faBullhorn,
        component:  React.lazy(() => import("../components/notFoundPage" ) )
    },
];


/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { isAuthorized }, user: { model } } = state;

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
