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
        this.getcurrentDialog = this.getcurrentDialog.bind(this);
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
            case '旁白':
                return '';
            case 'silvery':
                return '银色斗篷:';
            case 'bobi':
                return '波比:';
            case 'boli':
                return '波莉:';
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
                        inside:count >= 34,
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
                    //图片-烈焰风暴
                    commonDialog.get('text') === '我的天……' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('lieyan-img', {

                                })}
                                src='../src/img/lieyanfengbao.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-暴风雪
                    commonDialog.get('text') === '我的妈呀……' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('baofengxue-img', {

                                })}
                                src='../src/img/baofengxue.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-炎爆术
                    commonDialog.get('text') === '我的上帝……' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('yanbao-img', {

                                })}
                                src='../src/img/yanbaoshu.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-奥术飞弹
                    commonDialog.get('text') === '我的神啊……' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('aoshufeidan-img', {

                                })}
                                src='../src/img/aoshufeidan.jpg' />
                        </div>
                    </div>
                }

                {
                    //角色图片
                    <div className='img-wrap'>
                        {
                            (commonDialog.get('role') === 'cat' || count >= 0) &&
                                <img
                                    className='cat-img'
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 0) &&
                                <img
                                    className={classNames('dog-img', {

                                    })}
                                    src='../src/img/dog.png' />
                        }

                        {
                            count >= 102 &&
                                <img
                                    className='bobi-img'
                                    src='../src/img/bobi.png' />
                        }

                        {
                            count >= 102 &&
                                <img
                                    className='boli-img'
                                    src='../src/img/boli.png' />
                        }

                    </div>
                }

            </div>
        );
    }

    getcurrentDialog() {
        let {
            getCommonDialog,
            getPoint,
            count,
            allPoint,
            gotoFin
            } = this.props;
        if (count === 113) {
            getPoint();
            getCommonDialog();
        } else if (count === 114) {
            gotoFin(allPoint);
        } else {
            getCommonDialog();
        }
    }

    render() {
        let {
            dialog,
            commonDialog,
            getCommonDialog,
            getChooseDialog,
            getPoint,
            count,
            allPoint
            } = this.props;

        return (
            <div className='story-fifth'>
                <Header
                    letf={{}}
                    center='第五章 真相大白'
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
                                    onClick={() => this.getcurrentDialog()}>
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