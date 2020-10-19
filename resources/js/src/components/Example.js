import React from 'react';
import PropTypes from "prop-types";

export function Example( props ) {
    const { onClick } = props;
    return (
        <div className="container" onClick={ onClick }>
            <h1>Hello world!</h1>
        </div>
    );
}

Example.propTypes = {
    onClick: PropTypes.func
};
