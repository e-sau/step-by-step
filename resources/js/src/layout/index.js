import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "../containers/HeaderContainer";
import { Footer } from "./Footer";
import { StyledContainer } from "./styled.sc";

export default function Layout( props ) {
    const { children} = props;
    return (
        <StyledContainer>
            <HeaderContainer/>
            <div className="page-body">
                { children }
            </div>
            <Footer/>
        </StyledContainer>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
}
