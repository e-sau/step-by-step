import { connect } from "react-redux";
import { ProfileEditForm } from "../components/ProfileEditForm";
import { bindActionCreators } from "redux";
import { changeModelAttribute, photoSelect, updateProfile } from "../store/user/actions";

function mapStateToProps( state ) {
  const { auth: { isAuthorized }, user: { model, isFetching } } = state;
  return {
    isAuthorized,
    userIsFetching: isFetching,
    user: model,
  };
}
function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    changeModelAttribute, updateProfile, photoSelect
  }, dispatch );
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( ProfileEditForm );
