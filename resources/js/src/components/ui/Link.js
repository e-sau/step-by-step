import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@material-ui/core";

const StyledLink = styled( RouterLink )`
    color: #484848;
    text-decoration: none;
    display: flex;
    padding: 0 20px;
`;

export function Link( props ) {
    const { uri, text } = props;
    return (
        <StyledLink className="link" to={ uri }>
            <Typography align="center">{ text }</Typography>
        </StyledLink>
    );
}

Link.propTypes = {
    uri: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
