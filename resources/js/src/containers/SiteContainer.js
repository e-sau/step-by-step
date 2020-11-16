import { useEffect } from "react";
import { connect } from "react-redux";
import { authByToken } from "../store/auth/actions";
import { bindActionCreators } from "redux";

/**
 * Компонент обертка, над всем приложением, кидает сигнал инициализации отдельных элементов
 * в нашем случае, попытки авторизации по токену
 *
 * @return { JSX.Element }
 **/
function SiteWrapper( props ) {
    const { authByToken, children } = props;
    useEffect( () => {
        authByToken()
    }, []);

    return children;
}

/** @return { Object } **/
const mapStateToProps = () => ({});

/** Мапим и оборачиваем функцией dispatch, все actionCreators **/
const mapDispatchToProps = ( dispatch ) => bindActionCreators({ authByToken }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )(SiteWrapper);
