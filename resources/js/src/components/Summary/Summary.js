import React from 'react';
import PropTypes from "prop-types";

import { StyledSummary } from "./styled.sc";

export function Summary( props ) {
  const { summary: { heading, text }} = props

  return (
    <StyledSummary>
      <summary>
        <span>{ heading }</span>
      </summary>
      <p>{ text }</p>
    </StyledSummary>
  );
}


Summary.propTypes = {
  summary: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      text: PropTypes.string,
  }
)}
