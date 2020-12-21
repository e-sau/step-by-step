import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button as MaterialButton } from "@material-ui/core";
import { colorsMap } from "../../common/colors";
import Typography from "@material-ui/core/Typography";

const StyledButton = styled( MaterialButton )`
  &.button {
    font-weight: bold;
    letter-spacing: 1.2px;
    padding: 0;

    .children {
      width: 100%;
      &>:first-child {
        color: #ffffff;
        background: ${ props => props.bg };
        width: 100%;
        min-width: 190px;
        border-radius: 4px;
        padding: 17px 0;

        display: grid;
        justify-content: center;

        text-transform: none;
      }
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export function Button( props ) {
  const { color, children, onClick, variant, className } = props;

  function renderChildren() {
    if ( typeof children === "string" ) {
      return <Typography>{ children }</Typography>;
    }
    return children;
  }

  return (
    <StyledButton
      className={ `button ${ className }`}
      variant={ variant }
      onClick={ onClick }
      bg={ colorsMap[ color ] || colorsMap.default }
    >
      <span className="children" >
        { renderChildren() }
      </span>
    </StyledButton>
  );
}

Button.defaultProps = {
  children: "button",
  variant: "contained",
  className: "",
};

Button.propTypes = {
  color: PropTypes.oneOf(
    Object.keys( colorsMap )
  ),
  onClick: PropTypes.func,
  variant: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
