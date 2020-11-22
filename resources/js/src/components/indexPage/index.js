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
    width: 820px;
    margin: 0 auto;
    margin-top: -67px;
    display: grid;
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
