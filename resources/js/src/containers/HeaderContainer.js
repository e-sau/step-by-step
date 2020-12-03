import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header } from "../layout/Header";
import { toggleAuthForm } from "../store/auth/actions";

/** @return { Object } **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized }, user: { model } } = state;
  return {
    isAuthorized,
    model: model
  };
}

const mapDispatchToProps = ( dispatch ) =>
  bindActionCreators({
    onClick: toggleAuthForm,
  }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( Header );
