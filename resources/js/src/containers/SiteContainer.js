import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Layout from "../layout";
import { Loader } from "../components/ui/Loader";
import { initialize } from "../store/site/actions";

/**
 * Компонент обертка, над всем приложением, кидает сигнал инициализации отдельных элементов
 * в нашем случае, попытки авторизации по токену
 *
 * @return { JSX.Element }
 **/
function SiteWrapper( props ) {
  const { initialize, children } = props;
  useEffect( () => {
    initialize();
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
  initialize: PropTypes.func.isRequired,
  children: PropTypes.any
};

const mapStateToProps = () => ({});

/** Мапим и оборачиваем функцией dispatch, все actionCreators **/
function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ initialize }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )( SiteWrapper );
