import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styled.sc";

import { Button } from "../components/ui/Button";
import PopupContainer from "../containers/PopupContainer";
import LoginFormContainer from "../containers/LoginFormContainer";

import { User } from "../models/User";

export function Header( props ) {
  const { isAuthorized, authFormShown, onClick } = props;

  const buttonConfig = {
    to: isAuthorized ? "/account" : "/login" ,
    text: isAuthorized ? "Личный кабинет" : "Войти"
  };

  function renderButton() {
    if ( isAuthorized ) {
      return (
        <Button className="login" color="primary">
          <Link className="link_login" to={ buttonConfig.to }>
            { buttonConfig.text }
          </Link>
        </Button>
      );
    }
    return (
      <Button className="login link_login" color="primary" onClick={onClick}>
        { buttonConfig.text }
      </Button>
    );
  }

  return (
    <StyledHeader>
      <Link to="/" className="site_name">Step by step</Link>
      { authFormShown && (
        <PopupContainer>
          <div>Войти</div>
          <br />
          <LoginFormContainer />
        </PopupContainer>
      )}
      { renderButton() }
    </StyledHeader>
  );
}

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  authFormShown: PropTypes.bool.isRequired,
  model: PropTypes.instanceOf( User ).isRequired,
};
