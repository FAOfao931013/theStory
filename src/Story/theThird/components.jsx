import React from 'react';
import Header from 'components/Header';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import classNames from 'classnames';
import Toolbar from 'components/Toolbar';
import Content from 'components/Content';
import './style.less';

class Third extends React.Component {
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
            case 'snake':
                return '巨蛇:';
            case '旁白':
                return '';
            case 'magic':
                return '魔法阵';
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
                        cave_2:count >= 73,
                })}>

                {
                    //敌人图片-巨蛇
                    commonDialog.get('enemy') === 'snake' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('snake-img', {
                                    moveSnake:count >= 32
                                })}
                                src='../src/img/snake.png' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-魔法阵
                    commonDialog.get('enemy') === 'magic' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('magic-img', {

                                })}
                                src='../src/img/magic.png' />
                        </div>
                    </div>
                }

                {
                    //图片-辣椒粉
                    commonDialog.get('text') === '这可是不打折扣的，辣！眼！睛！' &&
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
                            (commonDialog.get('role') === 'cat') &&
                                <img
                                    className={classNames('cat-img', {
                                        // disappear:count >= 21
                                    })}
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 0) &&
                                <img
                                    className={classNames('dog-img', {
                                        // disappear:count >= 66
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
            gotoFourth
            } = this.props;

        return (
            <div className='story-third'>
                <Header
                    letf={{}}
                    center='第三章 黑暗洞穴'
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
                                    onClick={count === 108 ? () => gotoFourth(point) : getCommonDialog}>
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

Third.propTypes = {
    dialog: React.PropTypes.instanceOf(Immutable.List),
    commonDialog: React.PropTypes.instanceOf(Immutable.Map),
    getCurrentDialog: React.PropTypes.func
};

export default Third;