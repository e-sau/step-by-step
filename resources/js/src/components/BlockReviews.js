import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Card/Card";
import { Review } from "../models/Review";
import styled from "styled-components";

const StyledBlockReviews = styled("div")`
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: calc(100% - 200px);
    // margin: auto;
    column-gap: 125px;
    row-gap: 25px;
    padding: 0 100px;
`;

export function BlockReviews( props ) {
  const { list } = props;
  return (
    <StyledBlockReviews>
      { list.map(( review ) => <Card key={ review.id } review={ review } /> ) }
    </StyledBlockReviews>
  );
}

BlockReviews.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.instanceOf( Review )
  ).isRequired,
};
