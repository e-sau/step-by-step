import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../layout";
import { authByToken } from "../store/auth/actions";
import { Loader } from "../components/ui/loader/Loader";

/**
 * Компонент обертка, над всем приложением, кидает сигнал инициализации отдельных элементов
 * в нашем случае, попытки авторизации по токену
 *
 * @return { JSX.Element }
 **/
function SiteWrapper( props ) {
    const { authByToken, children } = props;
    useEffect( () => {
        authByToken();
    }, []);

    return (
        <Layout>
            <Suspense fallback={ <Loader/> }>
                { children }
            </Suspense>
        </Layout>
    );
}

SiteWrapper.propTypes = {
    authByToken: PropTypes.func.isRequired,
    children: PropTypes.any
};


const mapStateToProps = () => ({});

/** Мапим и оборачиваем функцией dispatch, все actionCreators **/
const mapDispatchToProps = ( dispatch ) => bindActionCreators({ authByToken }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps )( SiteWrapper );
