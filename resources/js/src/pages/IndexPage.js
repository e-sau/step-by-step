import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Review } from "../models/Review";
import SubjectsSelectContainer from "../containers/SubjectsSelectContainer";

import { Spacer } from "../components/ui/Spacer";
import { Preview } from "../components/Preview";
import { Features } from "../components/Features";
import { BlockAdvert } from "../components/BlockAdvert";
import { BlockReviews } from "../components/BlockReviews";
import { ExampleTasks } from "../components/ExampleTasks";
import { HorizontalScroll } from "../components/ui/HorizontalScroll";

const SubjectsContainer = styled( "div" )`
    max-width: 820px;
    margin: 0 auto;
    margin-top: calc(10vh - 67px);
    display: grid;

    @media (max-width: 420px) {
      margin-top: calc(20vh - 67px);
    }
`;

export default function IndexPage( props ) {
  const { reviews } = props;

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

      <div className={ "reviews" }>
        <HorizontalScroll>
          <BlockReviews list={ reviews } />
        </HorizontalScroll>
      </div>

      <Spacer size={ 120 } />
    </React.Fragment>
  );
}

IndexPage.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.instanceOf( Review )
  ),
};
