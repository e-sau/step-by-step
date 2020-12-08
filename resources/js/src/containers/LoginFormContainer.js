import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { login } from "../store/auth/actions";
import { changeModelAttribute } from "../store/user/actions";

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
  const { auth: { isAuthorized, errors } } = state;
  return { errors, isAuthorized, };
}

/**
 * Мапим и оборачиваем функцией dispatch, все actionCreators
 * @param { any } dispatch
 * @return { Object }
 **/
const mapDispatchToProps = ( dispatch ) =>
  bindActionCreators({
    onChange: changeModelAttribute,
    onLogin: login,
  }, dispatch );


/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( LoginForm );
