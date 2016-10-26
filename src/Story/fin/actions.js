import {
    push,
    go
} from 'react-router-redux';
import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    List,
    Map
} = Immutable;

const {
    FIN_GETDIALOG,
    FIN_GETCOMMONDIALOG,
    FIN_GETCHOOSEDIALOG,
    FIN_GETPOINT
} = actionTypes;


export function getDialog(point) {
    return {
        type: FIN_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'dog',
                    text: '这段冒险结束了。',
                }),
                Map({
                    role: 'dog',
                    text: '你的得分是',
                }),
                Map({
                    role: 'dog',
                    text: '那么可以解锁什么呢？',
                }),
                Map({
                    role: 'dog',
                    text: '当然是解锁更多姿势啦~',
                }),
                Map({
                    role: 'dog',
                    text: '好啦，开玩笑的啦。',
                }),
                Map({
                    role: 'dog',
                    text: '就解锁这张照片吧。',
                }),
                Map({
                    role: 'dog',
                    text: '好了，照片也看过了。',
                }),
                Map({
                    role: 'dog',
                    text: '接下来我有些话想说。',
                }),
                Map({
                    role: 'dog',
                    text: '这个游戏用了很多的我现在工作中的技术。',
                }),
                Map({
                    role: 'dog',
                    text: '像是react,redux,Immutable',
                }),
                Map({
                    role: 'dog',
                    text: '所以就结合了他们做了这个游戏。',
                }),
                Map({
                    role: 'dog',
                    text: '可能还不太精致，但我会继续努力的！',
                }),
                Map({
                    role: 'dog',
                    text: '最后，祝你生日快乐~',
                }),
                Map({
                    role: 'dog',
                    text: '我爱你。',
                }),
                Map({
                    role: 'dog',
                    text: '对了，这个游戏就不要截图发朋友圈啦。',
                }),
                Map({
                    role: 'dog',
                    text: '就属于我们之间的最独特的生日礼物。',
                }),
                Map({
                    role: 'dog',
                    text: '还有，你也应该猜到了吧，这个游戏里面还有一个伏笔！',
                }),
                Map({
                    role: 'dog',
                    text: '就是钓鱼大赛！',
                }),
                Map({
                    role: 'dog',
                    text: '所以，这就是明年的生日游戏咯~',
                }),
                Map({
                    role: 'dog',
                    text: '好好期待吧。',
                }),
            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: FIN_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: FIN_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}

export function getPoint(point) {
    return {
        type: FIN_GETPOINT,
        point:point,
        text: 'get all point',
    };
}
