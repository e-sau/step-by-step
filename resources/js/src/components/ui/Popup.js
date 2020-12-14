import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPopup= styled("div")`
  &.popup__wrapper {
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #0000006e;
  }

  .icon__close {
    width: 30px;
    height: 30px;
    fill: #4791DB;
    margin: 20px auto;
    cursor: pointer;
  }

  .popup {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);
    border-radius: 4px;
    max-width: 600px;
    padding: 40px;
    margin: 50px auto;
    box-sizing: border-box;
  }

  @media (max-width: 420px) {
    &.popup {
      width: 350px;
    }

    .children div {
      display: flex;
      flex-direction: column;
    }
    .children div a {
      margin-top: 20px;
    }
  }
`;

export function Popup( props ) {
  const { children, toggleAuthForm } = props;

  return (
    <StyledPopup className="popup__wrapper">
      <div className="icon__close" onClick={ toggleAuthForm }>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.76 511.76" xmlSpace="preserve">
          <g>
            <path d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048
			c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z
			 M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
			c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165
			c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0
			c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"/>
          </g>
        </svg>
      </div>
      <div className="popup">
        <span className="children" >
          { children }
        </span>
      </div>
    </StyledPopup>
  );
}

Popup.propTypes = {
  children: PropTypes.any,
  toggleAuthForm: PropTypes.func.isRequired,
};
