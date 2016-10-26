import React from 'react';
import { connect } from 'react-redux';
import './style.less';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            center,
            } = this.props;
        return (
            <div className='header'>
                <div className='navbar'>
                    <div className='navbar-inner'>
                        <div className='left link'></div>

                        <div className='center'>{center}</div>

                        <div className='right link'></div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    center: React.PropTypes.string.isRequired,
};


export default connect()(Header);