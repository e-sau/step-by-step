import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StyledContainer } from "./styled.sc";

export default function Layout( props ) {
    const { children } = props;
    return (
        <StyledContainer>
            <Header/>
            <div className="page-body">
                { children }
            </div>
            <Footer/>
        </StyledContainer>
    );
}
