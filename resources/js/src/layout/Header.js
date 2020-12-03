import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styled.sc";
import { Button } from "../components/ui/Button";

import { User } from "../models/User";

export function Header( props ) {
  const { isAuthorized, onClick } = props;

  const buttonConfig = {
    to: isAuthorized ? "/account" : "/login" ,
    text: isAuthorized ? "Личный кабинет" : "Войти"
  };

  return (
    <StyledHeader>
      <Link to="/" className="site_name">Step by step</Link>
      <Button className="login link_login" color="primary" onClick={onClick}>
        { buttonConfig.text }
      </Button>
    </StyledHeader>
  );
}

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  model: PropTypes.instanceOf( User ).isRequired,
};
