import React from "react";
import styled from "styled-components"
import { Preview } from "./blockPreview";
import { Features } from "./blockFeatures";
import { BlockAdvert } from "./BlockAdvert";
import { BlockReviews } from "./BlockReviews";
import SubjectsSelectContainer from "../../containers/SubjectsSelectContainer";
import { ExampleTasks } from "./blockExample";
import { HorizontalScroll } from "../ui/HorizontalScroll";

import { Spacer } from "../Spacer";

const SubjectsContainer = styled( "div" )`
    max-width: 820px;
    margin: 0 auto;
    margin-top: calc(10vh - 67px);
    display: grid;

    @media (max-width: 420px) {
      margin-top: calc(20vh - 67px);
    }
`;

export default function ( props ) {
    return (
        <React.Fragment>
            <Preview/>
            <SubjectsContainer>
                <SubjectsSelectContainer/>
            </SubjectsContainer>

            <Spacer size={ 100 } />
            <Features/>
            <Spacer size={ 100 } />

            <ExampleTasks/>
            <BlockAdvert/>

            <HorizontalScroll>
                <BlockReviews/>
            </HorizontalScroll>
            <Spacer size={ 120 } />
        </React.Fragment>
    );
}
