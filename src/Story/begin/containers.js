import { connect } from 'react-redux';
import Begin from './components';
import {mapStateToProps,mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Begin);