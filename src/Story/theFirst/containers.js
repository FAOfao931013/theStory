import { connect } from 'react-redux';
import First from './components';
import {mapStateToProps,mapDispatchToProps} from './selectors';


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(First);