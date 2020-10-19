import { connect } from "react-redux";
import { Example } from '../components/Example';

import { test } from '../domains/__example__/actions';

/**
 * Маппинг стейта для компонента, и передача этих данных в виде props
 * @param { Object } state
 * @return { Object }
 **/
function mapStateToProps( state ) {
    return {};
}
/** @type Object Передача ActionCreators */
const mapDispatchToProps = {
    onClick: test
};
/**
 * Возвращаем из файла компонент в который передали нужные пропсы ( свойства и действия )
 **/
export default connect(mapStateToProps, mapDispatchToProps)( Example );
