import React from 'react';
import PropTypes from "prop-types";
import { Header } from './Header';
import { Footer } from './Footer';

Task.propTypes = {
    name: PropTypes.string
};

export function Task( props ) {
    const { name } = props;

    return (
        <>
            <Header />
            <h1>Hello world!</h1>
            <Footer />
        </>
    );
}
