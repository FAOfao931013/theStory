import { push } from 'react-router-redux';

export function mapStateToProps(state) {
    return {};
}

export function mapDispatchToProps(dispatch) {
    return {
        gotoFirst() {
            dispatch(push('/story/first'));
        }
    };
}
