import { connect } from 'react-redux';
import Second from './components';
import {mapStateToProps,mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Second);