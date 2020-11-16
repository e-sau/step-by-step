import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginPage } from "../components/loginPage";
import { login, changeSignupData } from "../domains/auth/actions";

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
 * @param { Function } dispatch
 * @return { Object }
 **/
function mapDispatchToProps( dispatch ) {
    function onChange( key, value ) {
        dispatch( changeSignupData( key, value ) );
    }
    function onLogin() {
        dispatch( login() );
    }
    return { onChange, onLogin };
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( PageWrapper );
