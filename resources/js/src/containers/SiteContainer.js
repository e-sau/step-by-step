import { useEffect } from "react";
import { connect } from "react-redux";
import { authByToken } from "../domains/auth/actions";

/**
 * Компонент обертка, над всем приложением, кидает сигнал инициализации отдельных элементов
 * в нашем случае, попытки авторизации по токену
 *
 * @return { JSX.Element }
 **/
function SiteWrapper( props ) {
    const { authByToken, children } = props;
    useEffect(() => {
        authByToken();
    }, []);

    return children;
}

/**
 * @return { Object }
 **/
function mapStateToProps() {
    return {};
}

/**
 * Мапим и оборачиваем функцией dispatch, все actionCreators
 * @return { Object }
 **/
const mapDispatchToProps = {
    authByToken: authByToken,
}

export default connect( mapStateToProps, mapDispatchToProps )(SiteWrapper);
