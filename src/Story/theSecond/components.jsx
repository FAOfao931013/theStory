import React from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import classNames from 'classnames';
import Toolbar from 'components/Toolbar';
import Content from 'components/Content';
import './style.less';

class Second extends React.Component {
    constructor(props) {
        super(props);

        this.getRole = this.getRole.bind(this);
    }

    componentDidMount() {
        this.props.getDialog();
    }

    getRole(role) {
        switch (role) {
            case 'dog':
                return '汪汪:';
            case 'cat':
                return '喵喵:';
            case 'silvery':
                return '银色斗篷:';
            case '旁白':
                return '';
        }
    }

    renderCurrentDialog() {
        let {
            commonDialog,
            count
            } = this.props;

        return (
            <div
                className={
                    classNames('dialog-wrap', {
                        cat:commonDialog.get('role') === 'cat',
                        dog:commonDialog.get('role') === 'dog',
                        street:count >= 31,
                        palace:count >= 44,
                        black:count >= 71,
                })}>

                {
                    //敌人图片-银色斗篷
                    commonDialog.get('enemy') === 'silvery' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img', {
                                    moveSilvery:count >= 57,
                                    moveSilveryBack:count >= 59
                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //图片-辣椒粉
                    commonDialog.get('text') === '获得 一袋辣椒粉' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='lajiaofen-img'
                                src='../src/img/lajiaofen.png' />
                        </div>
                    </div>
                }

                {
                    //角色图片
                    <div className='img-wrap'>
                        {
                            (commonDialog.get('role') === 'cat' || count >= 0) &&
                                <img
                                    className={classNames('cat-img', {
                                        disappear:count >= 31
                                    })}
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 0) &&
                                <img
                                    className={classNames('dog-img', {
                                        disappear:count >= 75
                                    })}
                                    src='../src/img/dog.png' />
                        }
                    </div>
                }

            </div>
        );
    }

    render() {
        let {
            dialog,
            commonDialog,
            getCommonDialog,
            getChooseDialog,
            count,
            point,
            gotoThird
            } = this.props;

        return (
            <div className='story-second'>
                <Header
                    letf={{}}
                    center='第二章 王国之乱'
                    right={{}} />
                <Content>
                    {dialog.size && this.renderCurrentDialog()}
                </Content>

                <Toolbar>
                    <div className='dialog-box'>
                        {
                            //普通对话
                            commonDialog.get('type') === 'select' ?
                                <div>
                                    {
                                        commonDialog.get('text').valueSeq().map((text, key) => (
                                            <div
                                                key={key}
                                                onClick={() => getChooseDialog(text)}>
                                                {
                                                    key === 0 ? 'A' : key === 1 ? 'B' : key === 2 ? 'C' : 'D'
                                                }: {text}
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div
                                    onClick={count === 78 ? () => gotoThird(point) : getCommonDialog}>
                                    {
                                        this.getRole(commonDialog.get('role'))
                                    }
                                    {commonDialog.get('text')}
                                    <div className='triangle'></div>
                                </div>
                        }
                    </div>
                </Toolbar>
            </div>
        );
    }
}

Second.propTypes = {
    dialog: React.PropTypes.instanceOf(Immutable.List),
    commonDialog: React.PropTypes.instanceOf(Immutable.Map),
    getCurrentDialog: React.PropTypes.func
};

export default Second;