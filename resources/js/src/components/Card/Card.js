import React from "react";
import PropTypes from "prop-types";

import { StyledCard } from "./styled.sc";
import { Review } from "../../models/Review";

export function Card( props ) {
  const { review } = props;
  const author = review.author;

  return (
    <StyledCard>
      <img src={ author.avatar } alt={`${ author.name } picture`} />
      <div>
        <h6>{ author.name } { author.surname }</h6>
        <p>{ review.message }</p>
      </div>
    </StyledCard>
  );
}

Card.propTypes = {
  review: PropTypes.instanceOf( Review ),
};
