import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { StyledFooter } from "./styled.sc";

export function Footer() {
  return (
    <StyledFooter>
      <div className="info-rows">
        <a className="link" href="mailto:info@stepbystep.ru">
          <FontAwesomeIcon icon={ faEnvelope } />
          <span className="text">info@stepbystep.ru</span>
        </a>
        <a className="link" href="tel:89999999999">
          <FontAwesomeIcon icon={ faPhoneAlt } />
          <span className="text">89999999999</span>
        </a>
      </div>
      <div className="social-networks">
        <a className="brand-icon" href="#">
          <FontAwesomeIcon icon={ faVk } />
        </a>
        <a className="brand-icon" href="#">
          <FontAwesomeIcon icon={ faInstagram } />
        </a>
        <a className="brand-icon" href="#">
          <FontAwesomeIcon icon={ faFacebook } />
        </a>
      </div>
      <nav className="info-rows">
        <Link className="link" to="/contacts">Контакты</Link>
        <Link className="link" to="/job">Вакансии</Link>
      </nav>
    </StyledFooter>
  );
}
