import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Example } from '../components/Example';
import { test } from '../store/__example__/actions';

/**Маппинг стейта для компонента, и передача этих данных в виде props */
const mapStateToProps = ( ) => ({});

/** Мапим и оборачиваем функцией dispatch, все actionCreators **/
const mapDispatchToProps = ( dispatch ) => bindActionCreators({ test }, dispatch);

/** Возвращаем из файла компонент в который передали нужные пропсы ( свойства и действия ) */
export default connect(mapStateToProps, mapDispatchToProps)( Example );
