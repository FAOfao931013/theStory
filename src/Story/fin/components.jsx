import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import classNames from 'classnames';
import Toolbar from 'components/Toolbar';
import Header from 'components/Header';
import Content from 'components/Content';
import './style.less';

class Fin extends React.Component {
    constructor(props) {
        super(props);

        this.getRole = this.getRole.bind(this);
    }

    componentDidMount() {
        this.props.getDialog(this.props.params.point);
        this.props.getPoint(this.props.params.point);
    }

    getRole(role) {
        switch (role) {
            case 'dog':
                return '汪汪:';
        }
    }

    renderCurrentDialog() {
        let {
            commonDialog,
            count,
            allPoint
            } = this.props;

        return (
            <div
                className={
                    classNames('dialog-wrap', {
                        cat:commonDialog.get('role') === 'cat',
                        dog:commonDialog.get('role') === 'dog',
                })}>

                {
                    commonDialog.get('text') === '你的得分是' &&
                    <div className='point'>
                        {allPoint}分
                    </div>
                }

                {
                    commonDialog.get('text') === '就解锁这张照片吧。' && allPoint >= 0 && allPoint <= 15 &&
                    <div className='fin-img-wrap'>
                        <img
                            className='fin-img'
                            src='../src/img/yangyang.jpg' />
                    </div>
                }

                {
                    commonDialog.get('text') === '就解锁这张照片吧。' && allPoint >= 16 && allPoint <= 26 &&
                    <div className='fin-img-wrap'>
                        <img
                            className='fin-img'
                            src='../src/img/quanzhilong.jpg' />
                    </div>
                }

                {
                    commonDialog.get('text') === '就解锁这张照片吧。' && allPoint === 27 &&
                    <div className='fin-img-wrap'>
                        <img
                            className='fin-img'
                            src='../src/img/me.jpg' />
                    </div>
                }

                {
                    //角色图片
                    <div className='img-wrap'>
                        {
                            (commonDialog.get('role') === 'cat') &&
                                <img
                                    className='cat-img'
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 1) &&
                                <img
                                    className={classNames('dog-img', {
                                        disappear:commonDialog.get('text') === '就解锁这张照片吧。'
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
            } = this.props;

        return (
            <div className='story-fin'>
                <Header
                    letf={{}}
                    center='尾声'
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
                                    onClick={commonDialog.get('text') === '好好期待吧。' ? null : getCommonDialog}>
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

Fin.propTypes = {
    dialog: React.PropTypes.instanceOf(Immutable.List),
    commonDialog: React.PropTypes.instanceOf(Immutable.Map),
    getCurrentDialog: React.PropTypes.func
};

export default Fin;