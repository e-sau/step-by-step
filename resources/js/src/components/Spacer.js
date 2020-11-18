import React from 'react';
import PropTypes from "prop-types";

import styled from "styled-components";

export function Spacer( props ) {
  const { size } = props;

  return (
    <StyledSpacer>
      <div className={`spacer_${size}`}></div>
    </StyledSpacer>
  )
}

Spacer.defaultProps = {
  size: 20
};

Spacer.propTypes = {
  size: PropTypes.oneOf(
    [4, 8, 20, 32, 48, 64, 80]
  ).isRequired
};

const StyledSpacer = styled("div")`
  .spacer_4 {
    margin-bottom: 4px;
  }
  .spacer_8 {
    margin-bottom: 8px;
  }
  .spacer_20 {
    margin-bottom: 20px;
  }
  .spacer_32 {
    margin-bottom: 32px;
  }
  .spacer_48 {
    margin-bottom: 48px;
  }
  .spacer_64 {
    margin-bottom: 64px;
  }
  .spacer_80 {
    margin-bottom: 80px;
  }
`;
