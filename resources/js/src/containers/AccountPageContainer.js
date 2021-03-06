import React from "react";
import { connect } from "react-redux";
import { faBullhorn, faCheckSquare, faEnvelope, faMedal, faPenSquare, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountPage from "../pages/AccountPage";
import { bindActionCreators } from "redux";
import { changeModelAttribute } from "../store/user/actions";

/**
 * Массив доступных категорий для боковой панели
 * @type Array
 **/
const NAV_ITEMS = [
  {
    id: 1, label: "Профиль", icon: faUser,
    component: React.lazy(() => import("./ProfileEditFormContainer" ) )
  },
  {
    id: 2, label: "Сообщения", icon: faEnvelope, disable: true,
    component: React.lazy(() => import("./MessagesContainer" ) )
  },
  {
    id: 3, label: "Завершенные предметы", icon: faCheckSquare,
    component:  React.lazy(() => import("./SubjectsCompleteContainer" ) ),
  },
  {
    id: 4, label: "Доступные предметы", icon: faPenSquare,
    component:  React.lazy(() => import("./SubjectsAvailableContainer" ) )
  },
  {
    id: 5, label: "Достижения", icon: faMedal, disable: true,
    component:  React.lazy(() => import("../pages/NotFoundPage" ) )
  },
  {
    id: 6, label: "Оповещения", icon: faBullhorn, disable: true,
    component:  React.lazy(() => import("../pages/NotFoundPage" ) )
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
