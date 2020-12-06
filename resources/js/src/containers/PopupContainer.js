import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { Popup } from "../components/ui/Popup";

import { toggleAuthForm } from "../store/auth/actions";

function PopupContainer( props ) {
  const {  children, ...rest } = props;
  return (
    <Popup {...rest }>
      { children }
    </Popup>
  );
}

PopupContainer.propTypes = {
  children: PropTypes.any
};

/** @return { Object } **/
function mapStateToProps( state ) {
  const { auth: { authFormShown } } = state;
  return { authFormShown };
}

const mapDispatchToProps = ( dispatch ) =>
  bindActionCreators({
    onClick: toggleAuthForm,
  }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( PopupContainer );
