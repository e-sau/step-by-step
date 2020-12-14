import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Header } from "../layout/Header";
import { toggleAuthForm, logout } from "../store/auth/actions";

/** @return { Object } **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized, authFormShown }, user: { model } } = state;
  return {
    isAuthorized,
    authFormShown,
    model: model
  };
}

function mapDispatchToProps ( dispatch ) {
  return bindActionCreators({ toggleAuthForm, logout }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Header );
