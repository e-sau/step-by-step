import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginPage } from "../components/loginPage";
import { login , changeUserData } from "../store/auth/actions";

/**
 * Обертка над компонентом страници, в случае если пользоавтель авторизован, перенаправляем на главную
 * @param { Object } props
 *
 * @return { JSX.Element }
 *
 * @todo повторяет логику SignupPage, пересмотреть кому редирект можно делегировать
 **/
function PageWrapper( props ) {
    const { isAuthorized, ...rest } = props;
    if ( isAuthorized ) {
        return <Redirect to="/"/>;
    }
    return <LoginPage { ...rest } />;
}

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { userData, isAuthorized, errors } } = state;
    return {
        errors,
        user: userData,
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
        onChange: changeUserData,
        onLogin: login,
    }, dispatch);


/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( PageWrapper );
