import React from "react";
import PropTypes from "prop-types";

import { StyledCard } from "./styled.sc";

export function Card( props ) {
    const { review: { author, text, image }} = props;

    return (
        <StyledCard>
            <img src={image} alt={`${author} picture`} />
            <div>
                <h6>{ author }</h6>
                <p>{ text }</p>
            </div>
        </StyledCard>
    );
}


Card.propTypes = {
    review: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string,
        image: PropTypes.string,
    }
    )};
