import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import { colorsMap } from "./colors";

const StyledDiv = styled( "div" )`
    color: #ffffff;
    background: ${ props => props.bg };
    position: relative;

    font-size: 13px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.04em;
    padding: 4px;

    &:after {
        content: "";
        width: 15px;
        height: 15px;
        background: ${ props => props.bg };
        display: block;
        position: absolute;
        right: -8px;
        top: 3px;
        transform: rotate(45deg);
        z-index: 10;
    }
`;

export function Step( props ) {
    const { children, color } = props;
    return (
        <StyledDiv bg={ colorsMap[ color ] || colorsMap.gray }>
            { children }
        </StyledDiv>
    );
}

Step.defaultProps = {
    variant: "contained",
};

Step.propTypes = {
    color:  PropTypes.oneOf(
        Object.keys( colorsMap )
    ),
}
