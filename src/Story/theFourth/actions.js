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
    FOURTH_GETDIALOG,
    FOURTH_GETCOMMONDIALOG,
    FOURTH_GETCHOOSEDIALOG
} = actionTypes;


export function getDialog() {
    return {
        type: FOURTH_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'dog',
                    text: '出来了！'
                }),
                Map({
                    role: 'dog',
                    text: '我们回到地面了！'
                }),
                Map({
                    role: 'dog',
                    text: '出来了！'
                }),
                Map({
                    role: 'dog',
                    text: '太好了！我感觉到圣光的力量又回到我的体内了。'
                }),
                Map({
                    role: 'silvery',
                    text: '你竟然活着出了黑暗洞穴。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '银色斗篷！！！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你命可真大啊。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你这个家伙！这里是哪里？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你不认识这里吗？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '这里是……星界山！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '没错，这里就是星界山！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你竟然活着出了黑暗洞穴。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '不可思议啊。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '星界山就在静风湖的旁边，你到这来做什么？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '和你说了也无妨，反正你很快就是个死人了。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你说什么？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '哈哈！不要怕，不止是你，整个喵喵王国的人都会来陪你的！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你把喵喵公主和其他王室的人怎么样了？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '公主？王室？都是狗屁！他们都要死！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你到底是谁？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '为什么对喵喵王国这么仇恨？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '也难怪，你当然不知道他们的那些卑劣勾当。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你什么意思？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '我问你圣骑士，你对星界山和静风湖了解多少？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '星界山？静风湖？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '（在我印象当中只不过是喵喵王国周围的一座山和一片湖）',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你知不知道这里曾经有个美丽的村庄。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '村庄？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '（似乎导师有提起过）好像是叫做……星风村？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '没错，就是星风村，本是一个与世无争的村子。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你可知道那个村子现在怎么样了吗？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '我记得几年前这个村子里的居民都陆续离开了，听说是因为村子里流行着一种可怕的怪病。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '而后，喵喵王国派人对村子进行了净化，虽然驱除了可怕的疾病，但村子也随之荒废了。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '净化？呵呵，净化。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '说的真好听啊，都是一派胡言！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你又知道些什么？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '当年，他们的确净化了村子，方法也很简单，就是……杀！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '杀？！你在说什么？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '他们根本没找到治愈的方法，于是杀光了村子里的所有人！这样疾病就不会再流行了！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '震惊了吗？圣骑士？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '我为什么要相信你？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你大可不信，因为死人不会说话，真相永远不会被揭开。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '只可惜，他们没想到，星风村的人并没有全死光！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '这么说……你幸存了下来？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '是的，就为了今天的复仇！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '就算你说的都是真的，我还是站在喵喵王国这一边。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '我也没指望你会站到我这一边，只不过想让你死个明白。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '王室的人到底在哪里？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '赢了就告诉你！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '那动手吧！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '分身之术！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '什么？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '竟然有这种招数……',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '放弃吧，圣骑士，你是打不过我的。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '不试试怎么知道。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '真有胆量，如果你我联手，说不定可以称霸一方。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '痴人说梦！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '那就再见了！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '疾风闪避（短时间大幅提升自己的速度）',
                        B: '盾牌壁垒（使用盾牌进行全方位防御）',
                        C: '剑刃风暴（高速旋转的同时挥舞大剑形成风暴）',
                        D: '长枪屏障（以横扫千军之势化长枪为屏障）',
                    }),
                    choose: Map({
                        '疾风闪避（短时间大幅提升自己的速度）': '疾风之力，常伴吾身吧！',
                        '盾牌壁垒（使用盾牌进行全方位防御）': '就让这盾牌成为壁垒加护吾身吧！',
                        '剑刃风暴（高速旋转的同时挥舞大剑形成风暴）': '我的躯体即是剑刃！风暴咆哮吧！',
                        '长枪屏障（以横扫千军之势化长枪为屏障）': '长枪所在便是我的所在！势如屏障！',
                    }),
                    point: Map({
                        '疾风闪避（短时间大幅提升自己的速度）': 1,
                        '盾牌壁垒（使用盾牌进行全方位防御）': 1,
                        '剑刃风暴（高速旋转的同时挥舞大剑形成风暴）': 1,
                        '长枪屏障（以横扫千军之势化长枪为屏障）': 1,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '还不错嘛！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '那再吃我这招！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '无形黑暗！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '又是这招？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '同样的招数你认为有用吗？！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '圣光之力！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '！！！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '不可能！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '即便你从静风湖湖底的黑暗洞穴逃出来了，也不可能拥有这等力量！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '是啊，看来我猜对了呢。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '猜对？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '看来你还不知道？当然是黑暗洞穴中的圣泉啊！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '不可能！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '那里有一条千年巨蛇看护，你怎么可能进得去！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '千年巨蛇？',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '现在已经是死蛇一条了。',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '你竟然干掉了千年巨蛇！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '废话！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '没想到竟然有这种事，不，我应该一开始就想到的！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '是我的疏忽……我的疏忽……',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '现在是个好机会！看来这银色斗篷已经神经紊乱了！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '进攻！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '流星追月剑！（以流星般的速度砍出数剑）',
                        B: '疾风迅猛枪！（以疾风之力猛地刺出数枪）',
                    }),
                    choose: Map({
                        '流星追月剑！（以流星般的速度砍出数剑）': '流！星！追！月！剑！',
                        '疾风迅猛枪！（以疾风之力猛地刺出数枪）': '疾！风！迅！猛！枪！',
                    }),
                    point: Map({
                        '流星追月剑！（以流星般的速度砍出数剑）': 1,
                        '疾风迅猛枪！（以疾风之力猛地刺出数枪）': 1,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '什么？！我的分身！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '最后一击！',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '圣光制裁!'
                    }),
                    choose: Map({
                        '圣光制裁!': '圣光啊!赐予我力量!'
                    }),
                    point: Map({
                        '圣光制裁!': 1
                    }),
                    type: 'select',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '啊！啊！啊！不……可……能……',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '呼，呼，呼，终于结束了。',
                }),
                Map({
                    role: 'dog',
                    text: '喵喵他们应该就在山顶，我们快去救他们吧。',
                }),
                Map({
                    role: 'dog',
                    text: '找到了！',
                }),
                Map({
                    role: 'cat',
                    text: '……',
                }),
                Map({
                    role: 'dog',
                    text: '喵喵公主？！',
                }),
                Map({
                    role: 'cat',
                    text: '……',
                }),
                Map({
                    role: 'dog',
                    text: '喵喵公主？！',
                }),
                Map({
                    role: 'cat',
                    text: '……',
                }),
                Map({
                    role: 'dog',
                    text: '好吧……看来是昏睡过去了。',
                }),
                Map({
                    role: 'dog',
                    text: '那是不是要亲一下就会醒了……',
                }),
                Map({
                    role: 'cat',
                    text: '……',
                }),
                Map({
                    role: 'dog',
                    text: '那我就……',
                }),
                Map({
                    role: 'cat',
                    text: '呀！',
                }),
                Map({
                    role: 'cat',
                    text: '你干嘛？！臭汪！',
                }),
                Map({
                    role: 'dog',
                    text: '！我！什么都没干！',
                }),
                Map({
                    role: 'cat',
                    text: '真的吗？！那你离我这么近干嘛？！',
                }),
                Map({
                    role: 'dog',
                    text: '我……我……我……我来救你的公主大人！',
                }),
                Map({
                    role: 'cat',
                    text: '救我？我好像是记得被人……',
                }),
                Map({
                    role: 'cat',
                    text: '啊！那个穿银色斗篷的混蛋！',
                }),
                Map({
                    role: 'cat',
                    text: '他人呢？！',
                }),
                Map({
                    role: 'dog',
                    text: '他已经被我打倒了！',
                }),
                Map({
                    role: 'cat',
                    text: '是吗？不错嘛。',
                }),
                Map({
                    role: 'cat',
                    text: '不对！我们得赶快回去！王宫里的人好像也都被银色斗篷袭击了！',
                }),
                Map({
                    role: 'dog',
                    text: '什么？！',
                }),
                Map({
                    role: 'dog',
                    text: '那我们快走！',
                }),
                Map({
                    role: 'cat',
                    text: '嗯！',
                }),

            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: FOURTH_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: FOURTH_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}
