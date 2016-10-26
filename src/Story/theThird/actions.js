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
    THIRD_GETDIALOG,
    THIRD_GETCOMMONDIALOG,
    THIRD_GETCHOOSEDIALOG
} = actionTypes;


export function getDialog() {
    return {
        type: THIRD_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'dog',
                    text: '……'
                }),
                Map({
                    role: 'dog',
                    text: '……'
                }),
                Map({
                    role: 'dog',
                    text: '……'
                }),
                Map({
                    role: 'dog',
                    text: '这里……是……'
                }),
                Map({
                    role: 'dog',
                    text: '我好像听见了水流声……'
                }),
                Map({
                    role: 'dog',
                    text: '这里……像是个洞穴……'
                }),
                Map({
                    role: 'dog',
                    text: '等一下！'
                }),
                Map({
                    role: 'dog',
                    text: '那个穿银色斗篷的人呢？！'
                }),
                Map({
                    role: 'dog',
                    text: '不见了……我记得他说什么……'
                }),
                Map({
                    role: 'dog',
                    text: '黑暗空间？'
                }),
                Map({
                    role: 'dog',
                    text: '没有听过，但至少能确定的是，我们卷入了不得了的事情。'
                }),
                Map({
                    role: 'dog',
                    text: '不知道喵喵公主和其他王室的人怎么样了。'
                }),
                Map({
                    role: 'dog',
                    text: '可恶啊！'
                }),
                Map({
                    role: 'dog',
                    text: '现在生气也没用，我们只能想办法走出去了。'
                }),
                Map({
                    role: 'dog',
                    text: '这个洞穴到处都是流水，难不成我们是在静风湖底下的那个洞穴内？'
                }),
                Map({
                    role: 'dog',
                    text: '的确有传闻说静风湖底下有个黑暗无比的洞穴，但一直没有人证实过，现在看来的确是有了。'
                }),
                Map({
                    role: 'dog',
                    text: '这个穿银色斗篷的男人竟然知道这个地方，还把我们传送过来了，看来也不简单啊。'
                }),
                Map({
                    role: 'dog',
                    text: '现在我还不能判断他的身份，但是我大概能确定他应该也是，或者说以前是喵喵王国的人。'
                }),
                Map({
                    role: 'dog',
                    text: '毕竟这静风湖少说也有上百年的历史了，如果不是对喵喵王国地理精通的人，一定不会发现这个洞穴的。'
                }),
                Map({
                    role: 'dog',
                    text: '现在也管不了那么多了，只有出去了再说。'
                }),
                Map({
                    role: 'dog',
                    text: '这个洞穴应该只有一条路，我们就朝这走吧。'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '好大的……蛇？！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '吐，看起来，吐，吐，十分美味，吐，吐。',
                    enemy: 'snake'
                }),

                Map({
                    role: '旁白',
                    text: '巨蛇吐着信子',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '蛇……会讲话！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '它不会是要把我们当食物吧。',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '这到底是什么鬼地方？！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '这里是，吐，我吃饭的地方，吐！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '还真把我们当食物了……',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '吃掉！吐吐吐！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '巨蛇攻过来了！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '要战斗了！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '尽全力躲闪',
                        B: '用盾牌防御',
                    }),
                    choose: Map({
                        '尽全力躲闪': '这里太狭窄了！看来只能硬吃一些攻击了！',
                        '用盾牌防御': '砰！砰！砰！这力量也太大了吧！不过还好都防下来了！',
                    }),
                    point: Map({
                        '尽全力躲闪': 0,
                        '用盾牌防御': 1,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '根本，吐，不堪一击！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '这巨蛇的攻击真猛烈啊！一味地防御也不是办法，我们也要反击！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '用大剑反击',
                        B: '用长枪反击'
                    }),
                    choose: Map({
                        '用大剑反击': '攻击距离太短了！只造成了一些伤害！',
                        '用长枪反击': '攻击距离十分完美！造成了巨大的伤害！',
                    }),
                    point: Map({
                        '用大剑反击': 0,
                        '用长枪反击': 1,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '吐，吐，吐，就凭你这点能耐，吐，乖乖的成为我的食物吧！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '这条巨蛇好强啊！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '用我的绝招试试！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '圣光制裁！'
                    }),
                    choose: Map({
                        '圣光制裁！': '圣光啊！赐予我力量！'
                    }),
                    point: Map({
                        '圣光制裁！': 0
                    }),
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '吐，吐，吐，什么东西？',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '竟然……没有用……',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '圣光的力量……难道在这无法使用吗……',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '吐！吐！吐！',
                    enemy: 'snake'
                }),
                Map({
                    role: '旁白',
                    text: '巨蛇用尾巴攻了过来！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '不好！啊！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '受到我尾巴重击竟然还能站起来，吐，骨头挺硬的，吐。',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '咳咳,咳咳。',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '放心，我没事，好歹圣骑士也是经过很强的肉体训练的。',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '不管你骨头有多硬，我的毒素都会慢慢腐蚀你的！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '不好，它要用毒牙来攻击了！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '我该怎么办？',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '等等！我有办法了！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '喵喵公主，真是太感谢你了！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '死神辣椒粉！',
                    }),
                    choose: Map({
                        '死神辣椒粉！': '这可是不打折扣的，辣！眼！睛！'
                    }),
                    point: Map({
                        '死神辣椒粉！': 2,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '哇！哇！哇！吐吐吐！我的眼睛！这什么？！我的眼睛好疼啊！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '哈哈！喵喵王国特制！死神辣椒粉！',
                    enemy: 'snake'
                }),
                Map({
                    role: '旁白',
                    text: '失去 一袋辣椒粉',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '好机会！反击！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '射出长枪插巨蛇的左眼',
                        B: '射出长枪插巨蛇的右眼'
                    }),
                    choose: Map({
                        '射出长枪插巨蛇的左眼': '长枪射了出去，迅如闪电，击中了巨蛇的左眼！',
                        '射出长枪插巨蛇的右眼': '长枪射了出去，迅如闪电，击中了巨蛇的右眼！',
                    }),
                    point: Map({
                        '射出长枪插巨蛇的左眼': 1,
                        '射出长枪插巨蛇的右眼': 1,
                    }),
                    change: '旁白',
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '哇！哇！哇！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '我的眼睛！！！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'snake',
                    text: '你竟敢毁了我的眼睛！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: '就是现在！我要终结你！',
                    enemy: 'snake'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '用大剑砍去蛇头',
                    }),
                    choose: Map({
                        '用大剑砍去蛇头': '去死吧！',
                    }),
                    point: Map({
                        '用大剑砍去蛇头': 1,
                    }),
                    change: '',
                    type: 'select',
                    enemy: 'snake'
                }),
                Map({
                    role: '旁白',
                    text: '蛇头重重的摔在了地上，血流不止。',
                }),
                Map({
                    role: 'dog',
                    text: '好险啊……',
                }),
                Map({
                    role: 'dog',
                    text: '这黑暗洞穴里不知道还有多少怪物……',
                }),
                Map({
                    role: 'dog',
                    text: '我还是先休息一会再前进吧。',
                }),
                Map({
                    role: '旁白',
                    text: '一个小时后。',
                }),
                Map({
                    role: 'dog',
                    text: '我们继续走吧。',
                }),
                Map({
                    role: 'dog',
                    text: '这里竟然有这么清澈的泉水！',
                }),
                Map({
                    role: 'dog',
                    text: '应该没有被污染过。',
                }),
                Map({
                    role: 'dog',
                    text: '你也渴了吧，我们一起喝一点吧。',
                }),
                Map({
                    role: 'dog',
                    text: '咕噜，咕噜，咕噜。',
                }),
                Map({
                    role: 'dog',
                    text: '啊！这泉水真好喝，感觉好多了。',
                }),
                Map({
                    role: 'dog',
                    text: '没想到这里竟然会有泉水，真是让人惊讶。'
                }),
                Map({
                    role: 'dog',
                    text: '等等……静风湖的地下泉水？我好像在哪本书上看到过。'
                }),
                Map({
                    role: 'dog',
                    text: '这泉水……难不成是？'
                }),
                Map({
                    role: 'dog',
                    text: '不可能吧，竟然在这里？'
                }),
                Map({
                    role: 'dog',
                    text: '你问我在自言自语什么？'
                }),
                Map({
                    role: 'dog',
                    text: '我只是在猜想，这泉水该不会是古老的圣泉吧。'
                }),
                Map({
                    role: 'dog',
                    text: '根据古代史书记载，静风湖本是一处圣泉所在。'
                }),
                Map({
                    role: 'dog',
                    text: '圣泉中泉水有着强大的力量，喝上一口就能使人精神百倍，而且圣光的力量也蕴含其中。'
                }),
                Map({
                    role: 'dog',
                    text: '但由于上古战争的缘故，圣泉发生了爆炸，才成了今天的静风湖。'
                }),
                Map({
                    role: 'dog',
                    text: '而在那之后，静风湖的水也渐渐成了普通的湖水了。'
                }),
                Map({
                    role: 'dog',
                    text: '但静风湖中的鱼类依然活的很好，所以才会有鲤鱼王的出现。'
                }),
                Map({
                    role: 'dog',
                    text: '咦！你看那边那个是什么？！',
                }),
                Map({
                    role: 'dog',
                    text: '这里竟然有一个魔法阵？！',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '我的导师曾经教过我一些魔法阵的知识。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '不过，魔法阵已经是古代的东西，现在很少见到了。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '古代的时候，人们通过魔法阵进行一些诸如祭祀之类的工作，当然也有被用来进行传送，就是地点的移动。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '但是通过魔法阵进行传送需要大量的法力，所以一般只有大魔导师才会。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '据我所知，这个世界上的大魔导师屈指可数……',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '不管那么多了，既然有魔法阵，就意味着也许可以传送回去。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '但是要怎么启动这个魔法阵呢？',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '只好试试看了。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '先试试看咒语。',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '菠萝菠萝蜜！',
                        B: '芝麻开门！',
                        C: '哈利路秋秋哈呀呀！',
                    }),
                    choose: Map({
                        '菠萝菠萝蜜！': '毫无反应。(出自《大话西游》)',
                        '芝麻开门！': '毫无反应。（出自《一千零一夜》）',
                        '哈利路秋秋哈呀呀！': '毫无反应。（出自《光能使者》）',
                    }),
                    point:Map({
                        '菠萝菠萝蜜！': 0,
                        '芝麻开门！': 0,
                        '哈利路秋秋哈呀呀！': 0,
                    }),
                    change:'magic',
                    type: 'select',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '……',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '我记得除了咒语，还有……圣光！',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '不过，在这洞穴中好像用不了圣光的力量……',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '不！我要相信圣光！',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '我依然能感觉圣光在我的身体中流动!',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '圣光！'
                    }),
                    choose: Map({
                        '圣光！': '圣光啊！打开这魔法阵吧！'
                    }),
                    point: Map({
                        '圣光！': 1
                    }),
                    type: 'select',
                    enemy: 'magic'
                }),
                Map({
                    role: '旁白',
                    text: '魔法阵发出了光亮！',
                    enemy:'magic'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy:'magic'
                }),

            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: THIRD_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: THIRD_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}
