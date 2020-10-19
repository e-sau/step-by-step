import { connect } from "react-redux";
import { Example } from '../components/Example';

import { test } from '../domains/__example__/actions';

const mapStateToProps = ( state ) => state;
const mapDispatchToProps = {
    onClick: test
};

export default connect(mapStateToProps, mapDispatchToProps)( Example );
