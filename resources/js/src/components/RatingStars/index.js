import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fillStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { StyledContainer } from "./styled.sc";

export function RatingStars( props ) {
  const { rating, starCount, starsHtmProps } = props;

  function getIcon( idx ) {
    if ( Math.floor( rating ) > idx ) {
      return fillStar;
    } else if ( rating > idx && rating < idx + 1 ) {
      return faStarHalfAlt;
    }
    return faStar;
  }

  const starsList = Array( starCount ).fill( starsHtmProps ).map(( props, idx) => (
    <FontAwesomeIcon
      key={ idx }
      icon={ getIcon( idx ) }
      { ...props }
    />
  ));

  return (
    <StyledContainer>
      <h5 className="rating_heading">Рейтинг:</h5>
      { starsList }
    </StyledContainer>
  );
}

RatingStars.defaultProps = {
  starCount: 5,
  starsHtmProps: {
    className: "star_icon"
  },
};

RatingStars.propTypes = {
  rating: PropTypes.number,
  starCount: PropTypes.number,
  starsHtmProps: PropTypes.object,
};