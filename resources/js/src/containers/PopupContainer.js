import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Popup } from "../components/ui/Popup";
import { toggleAuthForm } from "../store/auth/actions";

/** @return { Object } **/
function mapStateToProps( state ) {
  const { auth: { authFormShown } } = state;
  return { authFormShown };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    toggleAuthForm,
  }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( Popup );
