import React from "react";
import PropTypes from "prop-types";
import { StyledBlockReviews } from "./styled.sc";
import { Card } from "../Card/Card";
import { Review } from "../../models/Review";

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
