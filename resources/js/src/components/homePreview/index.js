import React from "react";
import LoginFormContainer from "../../containers/LoginFormContainer";
import { StyledContainer, Wrapper } from "./styled.sc";

export default function HomePreview( props ) {
    return (
        <StyledContainer>
            <div className="background">
                <img className="background_image" src={"/images/image.png"} alt="img"/>
                <Wrapper className="background_overflow"/>
            </div>

            <Wrapper className="content">
                <div className="content_text">
                    Дополнительные<br/> занятия для школьников
                </div>
                <div className="login_form">
                    <LoginFormContainer/>
                </div>
            </Wrapper>
        </StyledContainer>
    );
}
