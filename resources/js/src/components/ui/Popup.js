import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPopup= styled("div")`
  &.popup {
    z-index: 100;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px rgba(71, 145, 219, 0.2);
    border-radius: 4px;
    max-width: 600px;
    left: 33%;
    top: 30%;
    padding: 40px;
    box-sizing: border-box;
  }

  @media (max-width: 420px) {
    &.popup {
      width: 350px;
      left: 15px;
      top: 20%;
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
  const { children } = props;

  return (
    <StyledPopup className="popup">
      <span className="children" >
        { children }
      </span>
    </StyledPopup>
  );
}

Popup.propTypes = {
  children: PropTypes.any,
};
