import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { login } from "../store/auth/actions";
import { changeModelAttribute } from "../store/user/actions";

/**
 * Обертка над компонентом страници, в случае если пользоавтель авторизован, перенаправляем на главную
 * @param { Object } props
 *
 * @return { JSX.Element }
 *
 * @todo повторяет логику SignupPage, пересмотреть кому редирект можно делегировать
 **/
function PageWrapper( props ) {
    const { isAuthorized, user, ...rest } = props;

    if ( isAuthorized ) {
        return null;
    }
    return <LoginForm user={ user } { ...rest } />;
}

PageWrapper.propTypes = {
    isAuthorized: PropTypes.bool.isRequired,
    user: PropTypes.object
};

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { isAuthorized, errors }, user: { model } } = state;
    return {
        errors,
        user: model,
        isAuthorized,
    };
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
    }, dispatch);


/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( PageWrapper );
