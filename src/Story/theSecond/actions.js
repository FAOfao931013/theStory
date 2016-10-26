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
    SECOND_GETDIALOG,
    SECOND_GETCOMMONDIALOG,
    SECOND_GETCHOOSEDIALOG
} = actionTypes;


export function getDialog() {
    return {
        type: SECOND_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'cat',
                    text: '我们到了。'
                }),
                Map({
                    role: 'dog',
                    text: '哇！好雄伟，好壮观啊！'
                }),
                Map({
                    role: 'cat',
                    text: '当然啦，这可是喵喵王国的首都喵喵王城。'
                }),
                Map({
                    role: 'dog',
                    text: '你也被惊叹到了吧，这座王城可是非常不得了的呢。'
                }),
                Map({
                    role: 'cat',
                    text: '好了，之前在静风湖真是多谢你们的帮助，我才能顺利钓到鲤鱼王。'
                }),
                Map({
                    role: 'dog',
                    text: '哪里哪里，我们还要多谢姑娘带我们到喵喵王城呢。'
                }),
                Map({
                    role: 'cat',
                    text: '那就算扯平了，你们来喵喵王城有什么事吗？'
                }),
                Map({
                    role: 'dog',
                    text: '（哎呀，这……现在还是先不要说身份的好，随便编个可信一点的谎言吧。）'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '我们就是来见识一下喵喵王城的，接下来打算逛逛。',
                        B: '我们正好有朋友在喵喵王城，所以要去拜访一下。',
                        C: '我们听说喵喵王城有卖好多好吃的，所以想去吃一吃。',
                    }),
                    choose: Map({
                        '我们就是来见识一下喵喵王城的，接下来打算逛逛。': '这样啊，那你们可要好好玩玩，喵喵王城有趣的地方多了去了。',
                        '我们正好有朋友在喵喵王城，所以要去拜访一下。': '那好吧。',
                        '我们听说喵喵王城有卖好多好吃的，所以想去吃一吃。': '当然啦！有很多很多很多好吃的！今天你们肯定有口福了！',
                    }),
                    point:Map({
                        '我们就是来见识一下喵喵王城的，接下来打算逛逛。': 1,
                        '我们正好有朋友在喵喵王城，所以要去拜访一下。': 0,
                        '我们听说喵喵王城有卖好多好吃的，所以想去吃一吃。': 2,
                    }),
                    change:'cat',
                    type: 'select'
                }),
                Map({
                    role: 'cat',
                    text: '而且下一周就是一年一度的钓鱼比赛了，所以现在是一年中王城人最多的时候。'
                }),
                Map({
                    role: 'dog',
                    text: '原来如此，早就听闻喵喵王国举办的钓鱼比赛非同凡响。'
                }),
                Map({
                    role: 'cat',
                    text: '那是当然的啦，你们也要去参加吗？'
                }),
                Map({
                    role: 'dog',
                    text: '不不不，我们钓鱼水平太低了，去了肯定会被笑话的。'
                }),
                Map({
                    role: 'cat',
                    text: '没关系的，重在参与（反正冠军都是我的）'
                }),
                Map({
                    role: 'dog',
                    text: '哈哈，那姑娘你是要去参加比赛的咯？'
                }),
                Map({
                    role: 'cat',
                    text: '对啊，我不仅参与，而且肯定会夺冠的！'
                }),
                Map({
                    role: 'dog',
                    text: '那就祝福姑娘夺冠了，到时候我们会去给姑娘加油的。（你都掉起鲤鱼王了，谁还能比你厉害……）'
                }),
                Map({
                    role: 'cat',
                    text: '谢谢你们了，那我就回去了。'
                }),
                Map({
                    role: 'dog',
                    text: '嗯，好的（看来喵喵公主不打算去别的地方了，不过我们待会还是跟着喵喵公主，直到她进王宫吧）'
                }),
                Map({
                    role: 'cat',
                    text: '哦！等一下，这个也给你们，我也用不到了。'
                }),
                Map({
                    role: 'dog',
                    text: '什么东西？'
                }),
                Map({
                    role: 'cat',
                    text: '这是一袋辣椒粉，是喵喵王国特制的死神辣椒研磨成的粉哟。'
                }),
                Map({
                    role: 'dog',
                    text: '这个？我们拿着也没用啊。'
                }),
                Map({
                    role: 'cat',
                    text: '反正给你们啦，要不要？'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '要',
                        B: '不要',
                    }),
                    choose: Map({
                        '要': '（要了吧，虽然不知道有什么用。）',
                        '不要': '（不要不太好吧，还是要了，反正是喵喵公主给的。）',
                    }),
                    point:Map({
                        '要': 2,
                        '不要': 0,
                    }),
                    change:'',
                    type: 'select',
                }),
                Map({
                    role: '旁白',
                    text: '获得 一袋辣椒粉'
                }),
                Map({
                    role: 'cat',
                    text: '好好收着，可能会有大作用哟。'
                }),
                Map({
                    role: 'dog',
                    text: '（真的吗……）'
                }),
                Map({
                    role: 'cat',
                    text: '那就再见啦。'
                }),
                Map({
                    role: 'dog',
                    text: '再见。'
                }),
                Map({
                    role: 'dog',
                    text: '好了，喵喵公主已经走远了，我们也快跟上她吧。'
                }),
                Map({
                    role: 'dog',
                    text: '这里就是王城的街道了，人还挺多的，喵喵公主就在前面。'
                }),
                Map({
                    role: 'dog',
                    text: '马上要到钓鱼大赛了，所以有很多人在街上。'
                }),
                Map({
                    role: 'dog',
                    text: '虽说挺热闹的，但是也不能松懈啊，今天我总有一种不好的预感。'
                }),
                Map({
                    role: 'dog',
                    text: '也可能是我多虑了。'
                }),
                Map({
                    role: 'dog',
                    text: '看，那边好像有个奇怪的人。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '银色的斗篷……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '他好像也注意到我们了，除了银色的斗篷什么也看不见啊……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '圣……骑……士……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '他好像要走了，算了，我们还是不要管它了。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '确认任务，终了。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '不见了……走的好快啊，感觉不太妙。',
                }),
                Map({
                    role: 'dog',
                    text: '我们先赶去王宫吧，喵喵公主这会应该已经到了。',
                }),
                Map({
                    role: 'dog',
                    text: '这里就是王宫了。',
                }),
                Map({
                    role: 'dog',
                    text: '怎么那么安静，不应该啊，就算钓鱼大赛快到了，大臣们都在忙，那至少应该有守卫啊。',
                }),
                Map({
                    role: 'dog',
                    text: '难道……',
                }),
                Map({
                    role: 'dog',
                    text: '！！！穿银色斗篷的人！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你是谁？为什么会在这里？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '非目标人物确认。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你在说什么？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '抹杀请求……确认。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '抹杀？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '难道守卫的消失和你有关？！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……杀！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '什么？！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '尽全力躲闪',
                        B: '用盾牌防御',
                        C: '用大剑抵挡',
                        D: '用长枪抵挡'
                    }),
                    choose: Map({
                        '尽全力躲闪': '闪！闪！闪！',
                        '用盾牌防御': '格挡！',
                        '用大剑抵挡': '勉强挡住了！',
                        '用长枪抵挡': '勉强挡住了！',
                    }),
                    point:Map({
                        '尽全力躲闪': 2,
                        '用盾牌防御': 1,
                        '用大剑抵挡': 0,
                        '用长枪抵挡': 0,
                    }),
                    change:'',
                    type: 'select',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '好险啊……武器竟然是短剑！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '抹杀……失败……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '想杀我你还嫩着呢！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '好歹我也是圣骑士！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '圣……骑……士……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '威胁……S！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '威胁S？你终于知道我的厉害了？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你到底是什么人？你对王宫的人们做了什么？！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '拒绝回答。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '不想说？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '那看来只有用武力让你开口了。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '请求使用……那个。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '用哪个都没用！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '黑暗空间。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '什么？！怎么回事？！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '再见，圣骑士。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '任务完成。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '获取主要目标--喵喵公主，成功。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '抹杀圣骑士，成功。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '哈哈……哈哈……哈哈哈……',
                    enemy:'silvery'
                }),
            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: SECOND_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: SECOND_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}
