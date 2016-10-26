import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import './style.less';

class Begin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='story-start'>
                <div className='title'>这是一个关于冒险的故事。</div>
                <div className='btn-start'>
                    <button
                        className='button button-fill button-raised'
                        onClick={this.props.gotoFirst}>开始游戏
                    </button>
                </div>
            </div>
        );
    }
}

export default Begin;