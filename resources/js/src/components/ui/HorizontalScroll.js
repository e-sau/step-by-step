import React from "react";
import HScroll from "react-scroll-horizontal";
import styled from "styled-components";

HScroll.propTypes = {};

const StyledScroll = styled( HScroll )`
    padding: 40px 0;
    &>div {
        position: unset !important;
    }
`;

export function HorizontalScroll( props ) {
    return (
        <div>
            <StyledScroll { ...props } />
        </div>
    );
}
