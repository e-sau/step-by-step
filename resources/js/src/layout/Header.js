import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledHeader, ControlsContainer } from "./styled.sc";
import { Button } from "../components/ui/Button";
import PopupContainer from "../containers/PopupContainer";
import LoginFormContainer from "../containers/LoginFormContainer";

import { User } from "../models/User";

export function Header( props ) {
  const { isAuthorized, authFormShown, onClick, model, onLogout } = props;

  /**
   * Монтируем всплывающее окно в портал
   * @return { ReactPortal|null }
   **/
  function setupPortal() {
    if ( !authFormShown ) {
      return null;
    }
    return ReactDOM.createPortal(
      <PopupContainer>
        <div>Войти</div>
        <br />
        <LoginFormContainer />
      </PopupContainer>,
      document.querySelector("#portal")
    );
  }

  /**
   * Отрисовка кнопок в зависимости от условия "авторизован ли пользователь"
   * @return { JSX.Element }
   **/
  function renderRightSide() {
    if ( !isAuthorized ) {
      return (
        <Button className="login link_login" color="primary" onClick={ onClick }>
          Войти
        </Button>
      );
    }
    return (
      <ControlsContainer>
        <Link className="account_link" to={ "/account" }>
          <img className="avatar" src={ model.photo } alt="avatar"/>
        </Link>
        <FontAwesomeIcon className="logout_link"  icon={ faSignOutAlt } onClick={ onLogout }/>
      </ControlsContainer>
    );
  }

  return (
    <StyledHeader>
      <Link to="/" className="site_name">Step by step</Link>
      { setupPortal() }
      { renderRightSide() }
    </StyledHeader>
  );
}

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  authFormShown: PropTypes.bool.isRequired,
  model: PropTypes.instanceOf( User ).isRequired,
  onLogout: PropTypes.func.isRequired,
};
