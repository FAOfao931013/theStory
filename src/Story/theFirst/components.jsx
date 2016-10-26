import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Immutable from 'immutable';
import classNames from 'classnames';
import Toolbar from 'components/Toolbar';
import Header from 'components/Header';
import Content from 'components/Content';
import './style.less';

class First extends React.Component {
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
            case 'wolf':
                return '恶狼:';
            case 'fish':
                return '鲤鱼王:';
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
                        wolf:commonDialog.get('role') === 'wolf',
                        lake:count > 21
                })}>

                {
                    //敌人图片-狼
                    commonDialog.get('enemy') === 'fight_wolf' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='wolf-img'
                                src='../src/img/wolf.jpg' />
                        </div>
                    </div>
                }

                {
                    //敌人图片-鱼
                    commonDialog.get('enemy') === 'fight_fish' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className={classNames('fish-img', {
                                    moveFish:count >= 69
                                })}
                                src='../src/img/fish.png' />
                        </div>
                    </div>
                }

                {
                    //图片-运动员
                    commonDialog.get('text') === '虽然我运动能力是很厉害~不过我不是运动员哟~我是圣骑士!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='yundongyuan-img'
                                src='../src/img/yundongyuan.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-圣骑士
                    commonDialog.get('text') === '你说对啦~我就是圣骑士~' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='shengqishi-img'
                                src='../src/img/shengqishi.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-探险家
                    commonDialog.get('text') === '探险!探险!探险!探险家也挺好玩的~可惜我不是~我是圣骑士!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='tanxianjia-img'
                                src='../src/img/tanxianjia.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-程序员
                    commonDialog.get('text') === '我看你才是程序员呢~~我是圣骑士!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='chengxuyuan-img'
                                src='../src/img/chengxuyuan.jpg' />
                        </div>
                    </div>
                }

                {
                    //图片-大剑
                    commonDialog.get('text') === '大智若愚!大剑无锋!重!斩!我们已经对恶狼造成了大量伤害,再来一击!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='dajian-img'
                                src='../src/img/dajian.png' />
                        </div>
                    </div>
                }

                {
                    //图片-长枪
                    commonDialog.get('text') === '一点寒芒先至,随后枪出如龙!我们已经对恶狼造成了大量伤害,再来一击!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='changqiang-img'
                                src='../src/img/changqiang.png' />
                        </div>
                    </div>
                }

                {
                    //图片-盾牌
                    commonDialog.get('text') === '看我的盾牌猛击!我们已经对恶狼造成了伤害,不过一味防御是不可能获胜的，再来一击!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='dunpai-img'
                                src='../src/img/dunpai.png' />
                        </div>
                    </div>
                }

                {
                    //图片-拳头
                    commonDialog.get('text') === '天汪流星拳!!!我们已经对恶狼造成了伤害,不过赤手空拳终究是敌不过恶狼的尖牙利爪，再来一击!' &&
                    <div className='img-wrap'>
                        <div className='fight'>
                            <img
                                className='quantou-img'
                                src='../src/img/quantou.png' />
                        </div>
                    </div>
                }

                {
                    //角色图片
                    <div className='img-wrap'>
                        {
                            (commonDialog.get('role') === 'cat' || count > 22) &&
                                <img
                                    className='cat-img'
                                    src='../src/img/cat.png' />
                        }

                        {
                            (commonDialog.get('role') === 'dog' || count >= 1) &&
                                <img
                                    className={classNames('dog-img', {
                                        moveDog:count == 21,
                                        moveDog_2:count === 62
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
            gotoSecond,
            point
            } = this.props;

        return (
            <div className='story-first'>
                <Header
                    letf={{}}
                    center='第一章 湖与相遇'
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
                                    onClick={count === 82 ? () => gotoSecond(point) : getCommonDialog}>
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

First.propTypes = {
    dialog: React.PropTypes.instanceOf(Immutable.List),
    commonDialog: React.PropTypes.instanceOf(Immutable.Map),
    getCurrentDialog: React.PropTypes.func
};

export default First;