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
                        black:count >= 63 && count < 67
                })}>

                {
                    //敌人图片-银色斗篷
                    commonDialog.get('enemy') === 'silvery' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img', {

                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-银色斗篷
                    count >= 52 && count <= 84 &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img-2', {
                                    moveSilvery_2:count >= 59,
                                    backSilvery_2:count >= 61
                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-银色斗篷
                    count >= 52 && count <= 84 &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img-3', {
                                    moveSilvery_3:count >= 59,
                                    backSilvery_3:count >= 61
                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-银色斗篷
                    count >= 52 && count <= 84 &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img-4', {
                                    moveSilvery_4:count >= 59,
                                    backSilvery_4:count >= 61
                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-银色斗篷
                    count >= 52 && count <= 84 &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('silvery-img-5', {
                                    moveSilvery_5:count >= 59,
                                    backSilvery_5:count >= 61
                                })}
                                src='../src/img/silvery.png' />
                        </div>
                    </div>
                }

                {
                    //图片-流星追月
                    commonDialog.get('text') === '流！星！追！月！剑！'  &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='liuxingzhuiyue-img'
                                src='../src/img/liuxingzhuiyue.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-疾风迅猛
                    commonDialog.get('text') === '疾！风！迅！猛！枪！'  &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='jifengxunmeng-img'
                                src='../src/img/jifengxunmeng.jpg' />
                        </div>
                    </div>
                }


                {
                    //角色图片
                    <div className='img-wrap'>
                        {
                            (commonDialog.get('role') === 'cat' || count >= 90) &&
                                <img
                                    className='cat-img'
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 1) &&
                                <img
                                    className={classNames('dog-img', {
                                        moveDog:count >= 99
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
            gotoFifth
            } = this.props;

        return (
            <div className='story-fourth'>
                <Header
                    letf={{}}
                    center='第四章 大魔导师'
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
                                    onClick={count === 113 ? () => gotoFifth(point) : getCommonDialog}>
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