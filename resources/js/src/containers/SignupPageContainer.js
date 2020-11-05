import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupPage } from "../components/signupPage";
import { changeSignupData, submit } from "../domains/auth/actions";

/**
 * Обертка над компонентом страници, в случае если пользоавтель авторизован, перенаправляем на главную
 * @param { Object } props
 * @return { JSX.Element }
 **/
function PageWrapper( props ) {
    const { isAuthorized, ...rest } = props;
    if ( isAuthorized ) {
        return <Redirect to="/"/>;
    }
    return <SignupPage { ...rest } />;
}

/**
 * Мапим параметры из стора, которые нужны нашей странице
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    const { auth: { signupFormData, isAuthorized } } = state;
    return {
        user: signupFormData,
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
    function onSubmit() {
        dispatch( submit() );
    }
    return { onChange, onSubmit };
}

/** Отдаем на использование подготовленный контейнер */
export default connect( mapStateToProps, mapDispatchToProps )( PageWrapper );
