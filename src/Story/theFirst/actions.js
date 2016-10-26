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
    FIRST_GETDIALOG,
    FIRST_GETCOMMONDIALOG,
    FIRST_GETCHOOSEDIALOG
} = actionTypes;


export function getDialog() {
    return {
        type: FIRST_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'dog',
                    text: '啊~今天天气真好。'
                }),
                Map({
                    role: 'dog',
                    text: '我是一只无忧无虑的汪汪~啦啦啦~'
                }),
                Map({
                    role: 'dog',
                    text: '不过呢，其实我还有个秘密身份。'
                }),
                Map({
                    role: 'dog',
                    text: '你想知道吗?'
                }),
                Map({
                    role: 'dog',
                    text: '猜猜看~'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '运动员',
                        B: '圣骑士',
                        C: '探险家',
                        D: '程序员'
                    }),
                    choose: Map({
                        '运动员': '虽然我运动能力是很厉害~不过我不是运动员哟~我是圣骑士!',
                        '圣骑士': '你说对啦~我就是圣骑士~',
                        '探险家': '探险!探险!探险!探险家也挺好玩的~可惜我不是~我是圣骑士!',
                        '程序员': '我看你才是程序员呢~~我是圣骑士!'
                    }),
                    point:Map({
                        '运动员': 1,
                        '圣骑士': 2,
                        '探险家': 1,
                        '程序员': 1
                    }),
                    type: 'select'
                }),
                Map({
                    role: 'dog',
                    text: '好啦，今天我还有个秘密任务。'
                }),
                Map({
                    role: 'dog',
                    text: '你想知道吗?'
                }),
                Map({
                    role: 'dog',
                    text: '不告诉你~啦啦啦~'
                }),
                Map({
                    role: 'dog',
                    text: '好吧，告诉你吧。'
                }),
                Map({
                    role: 'dog',
                    text: '我今天要去保护一只喵喵。'
                }),
                Map({
                    role: 'dog',
                    text: '她是我们国家的公主，今天早上独自去了静风湖玩，虽然近来比较和平，但为了以防万一，国王还是派我去保护她。'
                }),
                Map({
                    role: 'dog',
                    text: '看你的样子，也不像坏人，跟我一起走吧。'
                }),
                Map({
                    role: 'dog',
                    text: '这片森林的前方便是静风湖了，警惕周围，我好像嗅到了一股不寻常的气味。'
                }),
                Map({
                    role: 'dog',
                    text: '呀!!!前方有一只恶狼!看来只有一战了,你看着很有智慧的样子,指挥的工作就拜托你了!',
                    enemy: 'fight_wolf'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '大剑',
                        B: '长枪',
                        C: '盾牌',
                        D: '拳头'
                    }),
                    choose: Map({
                        '大剑': '大智若愚!大剑无锋!重!斩!我们已经对恶狼造成了大量伤害,再来一击!',
                        '长枪': '一点寒芒先至,随后枪出如龙!我们已经对恶狼造成了大量伤害,再来一击!',
                        '盾牌': '看我的盾牌猛击!我们已经对恶狼造成了伤害,不过一味防御是不可能获胜的，再来一击!',
                        '拳头': '天汪流星拳!!!我们已经对恶狼造成了伤害,不过赤手空拳终究是敌不过恶狼的尖牙利爪，再来一击!'
                    }),
                    point:Map({
                        '大剑': 2,
                        '长枪': 2,
                        '盾牌': 1,
                        '拳头': 1
                    }),
                    type: 'select',
                    enemy: 'fight_wolf'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '圣光制裁!'
                    }),
                    choose: Map({
                        '圣光制裁!': '圣光啊!赐予我力量!'
                    }),
                    point:Map({
                        '圣光制裁!': 1
                    }),
                    type: 'select',
                    enemy: 'fight_wolf'
                }),
                Map({
                    role: 'wolf',
                    text: '啊~~~呜~~~啊~~~呜~~~',
                    enemy: 'fight_wolf'
                }),
                Map({
                    role: 'dog',
                    text: '刚才真是好惊险，还好有你在呢。'
                }),
                Map({
                    role: 'dog',
                    text: '看来你的战略战术还不错，这样吧，以后就由你来当军师了。'
                }),
                Map({
                    role: 'dog',
                    text: '虽然我们萍水相逢，但还是希望你能借我一臂之力。'
                }),
                Map({
                    role: 'dog',
                    text: '我察觉到前方还有危险，今天的静风湖和往常的不太一样，这很不寻常，你得跟紧我。'
                }),
                Map({
                    role: 'dog',
                    text: '我们到了，这里就是静风湖了。'
                }),
                Map({
                    role: 'dog',
                    text: '看！喵喵公主在那边！'
                }),
                Map({
                    role: 'cat',
                    text: '今天真是个好天气~钓鱼~钓鱼~'
                }),
                Map({
                    role: 'cat',
                    text: '我要掉条大鱼~大鱼大鱼快上钩~'
                }),
                Map({
                    role: 'cat',
                    text: '钓到大鱼，今天回家煮鱼汤喝~'
                }),
                Map({
                    role: 'dog',
                    text: '公主好像在那边钓鱼的样子，我们就先不要去打扰她了。'
                }),
                Map({
                    role: 'dog',
                    text: '我们就在这附近做好守卫的工作就行了。'
                }),
                Map({
                    role: 'dog',
                    text: '刚才我还察觉到一丝不寻常，但是在来静风湖的路上，这感觉渐渐的消失了。'
                }),
                Map({
                    role: 'dog',
                    text: '不知道是我多虑了，还是敌人故意隐藏起自己的气息了。'
                }),
                Map({
                    role: 'dog',
                    text: '希望是前者吧，如果是后者的话……那就麻烦了。'
                }),
                Map({
                    role: 'dog',
                    text: '你放心，不要太过忧虑，好歹我也是个圣骑士，我会保护你和公主的。'
                }),
                Map({
                    role: 'dog',
                    text: '你当然也要助我一臂之力啊，我相信我们的组合肯定能打败一切敌人。'
                }),
                Map({
                    role: 'cat',
                    text: '哈哈~又上钩一条，今晚可以吃大餐了。'
                }),
                Map({
                    role: 'dog',
                    text: '喵喵公主，好厉害啊，这么一会功夫就钓起了那么多条大鱼。'
                }),
                Map({
                    role: 'dog',
                    text: '你可能还不知道吧，喵喵公主可是我们国家的钓鱼冠军。'
                }),
                Map({
                    role: 'dog',
                    text: '喵喵国家每年都会举办一届全国钓鱼大赛，无论是谁，只要你热爱钓鱼，都可以参加，夺得冠军的人可以得到一年份的鱼和一个纯金打造的鲤鱼王奖杯。'
                }),
                Map({
                    role: 'dog',
                    text: '所以每年都有很多的人来参加这个比赛，喵喵公主也会参加，而且她已经连续三次夺得冠军了。'
                }),
                Map({
                    role: 'dog',
                    text: '你说是不是很厉害。'
                }),
                Map({
                    role: 'dog',
                    text: '你也想去参加吗？今年的钓鱼大赛下个月就开始了，现在报名还来得及。'
                }),
                Map({
                    role: 'dog',
                    text: '你说我要不要一起参加？算了啦，我可钓不来鱼，游泳的话倒还是会一点，哈哈。'
                }),
                Map({
                    role: 'cat',
                    text: '呀！呀呀！呀呀呀！这条鱼的劲道好大啊！'
                }),
                Map({
                    role: 'cat',
                    text: '不过，我才不怕你呢！我一定要把你钓上来！我可是钓！鱼！冠！军！'
                }),
                Map({
                    role: 'dog',
                    text: '看样子，喵喵公主好像钓到了一条大鱼。'
                }),
                Map({
                    role: 'cat',
                    text: '左，右，左，右！就是现在！'
                }),
                Map({
                    role: 'fish',
                    text: '哇！哇！哇！哇！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '这条鱼好大啊！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '等一下！我的天啊！这难道是？！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '鲤鱼王！！！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '鲤鱼王！！！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '传说中……静风湖的确有鲤鱼王居中，但是千百年来没人见过……',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '没想到真的有鲤鱼王，我也只是听说在静风湖中的确有野生的鲤鱼王。',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '你问我鲤鱼王是什么？那真是一言难尽啊。',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '总之一句话来说就是……',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '做梦都想要钓到你！今天真是luck的一天！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '是时候展现真正的技术了！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '看喵喵公主的样子是铁了心要钓上这条鲤鱼王了。',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '快！我们助她一臂之力！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '你说要怎么做？很简单啊！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '打倒它！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '攻击鱼鳍',
                        B: '攻击鱼尾',
                        C: '攻击鱼背',
                        D: '攻击鱼身'
                    }),
                    choose: Map({
                        '攻击鱼鳍': '这个选择很好，这样一来它的速度势必会大大下降！',
                        '攻击鱼尾': '这个选择很好，这样一来它就无法很好的控制方向了！',
                        '攻击鱼背': '它的背部好坚硬啊，不过还是受到了伤害，应该会给喵喵公主带来帮助。',
                        '攻击鱼身': '它的身体好坚硬啊，不过还是受到了伤害，应该会给喵喵公主带来帮助。'
                    }),
                    point:Map({
                        '攻击鱼鳍': 2,
                        '攻击鱼尾': 2,
                        '攻击鱼背': 1,
                        '攻击鱼身': 1
                    }),
                    type: 'select',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '那边两个人是谁？好像在帮我钓到鲤鱼王的样子，既然如此，那我也使出全力吧！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '呀！呀！呀！呀！呀！呀！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '喵喵公主似乎使出了全力，我们也使出全力吧！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '虽然感觉对不起鲤鱼王，但是这也是迫不得已的。',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: Map({
                        A: '圣光制裁!'
                    }),
                    choose: Map({
                        '圣光制裁!': '圣光啊!赐予我力量!'
                    }),
                    point:Map({
                        '圣光制裁!': 1,
                    }),
                    type: 'select',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'fish',
                    text: '哇………………呜………………',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '鲤鱼王的力气好像用尽了！这对喵喵公主来说是个好机会！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '就是现在！鲤鱼王上钩吧！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '！！！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'dog',
                    text: '成功了吗？',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: 'YES！',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'fish',
                    text: '呜……呜……呜……',
                    enemy: 'fight_fish'
                }),
                Map({
                    role: 'cat',
                    text: '哈哈，今天真是太棒了！太幸运了！',
                }),
                Map({
                    role: 'cat',
                    text: '对了，那边的！你们是谁啊？刚才多谢你们帮了我的忙！',
                }),
                Map({
                    role: 'dog',
                    text: '公主好像在问我们是谁，虽然很想说是王国的骑士，但是好像喵喵公主不太喜欢外出的时候被人保护，我们就说是路过的旅人好了。',
                }),
                Map({
                    role: 'dog',
                    text: '我们是路过此地的旅人，刚才见到公主……啊，不，姑娘有危险，所以助了一臂之力，希望有帮上姑娘的忙！',
                }),
                Map({
                    role: 'cat',
                    text: '（原来是路过的旅行者）谢谢你们了！',
                }),
                Map({
                    role: 'cat',
                    text: '你们这是要去哪里啊？',
                }),
                Map({
                    role: 'dog',
                    text: '（接下来公主应该是要回王城去了，我们也说去王城好了）我们听说喵喵王国有一个美丽恢弘的首都叫苗苗王城，所以想去看一看，但好像迷路了！',
                }),
                Map({
                    role: 'cat',
                    text: '（原来他们要去喵喵王城啊，刚才他们帮了我，那我也帮他们带下路好了，算扯平了）我就住在喵喵王城，我带你们去吧！',
                }),
                Map({
                    role: 'dog',
                    text: '（好的，这样就能护送喵喵公主到王城了）谢谢姑娘了！',
                }),
            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: FIRST_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: FIRST_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}
