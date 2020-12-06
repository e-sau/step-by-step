import React from "react";
import PropTypes from "prop-types";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

Task.propTypes = {
  name: PropTypes.string
};

export function Task( props ) {
  const { name } = props;

  return (
    <>
      <Header />
      <h1>Hello world! { name }</h1>
      <Footer />
    </>
  );
}
