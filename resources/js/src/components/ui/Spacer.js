import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export function Spacer( props ) {
    return (
        <StyledSpacer size={ props.size } />
    );
}

Spacer.defaultProps = {
    size: 20
};

Spacer.propTypes = {
    size: PropTypes.oneOf(
        [4, 8, 20, 24, 32, 48, 64, 80, 100, 120]
    ).isRequired
};

const StyledSpacer = styled("div")`
  margin-bottom: ${props => props.size}px
`;
