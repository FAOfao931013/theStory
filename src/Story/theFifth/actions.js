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
    FIFTH_GETDIALOG,
    FIFTH_GETCOMMONDIALOG,
    FIFTH_GETCHOOSEDIALOG,
    FIFTH_GETPOINT
} = actionTypes;


export function getDialog() {
    return {
        type: FIFTH_GETDIALOG,
        dialog: List(
            [
                Map({
                    role: 'cat',
                    text: '我们回来了。',
                }),
                Map({
                    role: 'dog',
                    text: '你看！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '银色斗篷！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '你不是被我消灭了吗？！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '等一下，这个银色斗篷好像有点奇怪。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '怎么一点反应都没有，好奇怪。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '感觉有点不寻常，小心为妙。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '到我身后来吧，喵喵公主，我来保护你。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '不用！我好歹也是学过法术的好吗！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '法术？难道你是法术学徒？',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '当然啦，我可是大魔导师的弟子。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '（真的吗……）',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '看来，不露两手是不行的了。',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '杀！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'dog',
                    text: '小心！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '没事，看我的！',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: Map({
                        A: '烈焰风暴！（让火焰净化一切！）',
                        B: '暴风雪！（冻住不许走！）',
                        C: '炎爆术！（脸盆那么大的火球砸过去！）',
                        D: '奥术飞弹！（三发奥能飞弹！）',
                    }),
                    choose: Map({
                        '烈焰风暴！（让火焰净化一切！）': '我的天……',
                        '暴风雪！（冻住不许走！）': '我的妈呀……',
                        '炎爆术！（脸盆那么大的火球砸过去！）': '我的上帝……',
                        '奥术飞弹！（三发奥能飞弹！）': '我的神啊……',
                    }),
                    point: Map({
                        '烈焰风暴！（让火焰净化一切！）': 2,
                        '暴风雪！（冻住不许走！）': 2,
                        '炎爆术！（脸盆那么大的火球砸过去！）': 2,
                        '奥术飞弹！（三发奥能飞弹！）': 2,
                    }),
                    change: 'dog',
                    type: 'select',
                    enemy: 'silvery'
                }),
                Map({
                    role: 'silvery',
                    text: '啊……',
                    enemy:'silvery'
                }),
                Map({
                    role: 'cat',
                    text: '不堪一击。',
                }),
                Map({
                    role: 'cat',
                    text: '好了，快让我们去王宫吧。',
                }),
                Map({
                    role: 'dog',
                    text: '……',
                }),
                Map({
                    role: 'cat',
                    text: '你愣什么神啊！',
                }),
                Map({
                    role: 'cat',
                    text: '快走啊！',
                }),
                Map({
                    role: 'dog',
                    text: '啊！哦……走。',
                }),
                Map({
                    role: 'cat',
                    text: '奇怪的汪。',
                }),
                Map({
                    role: 'dog',
                    text: '（好厉害啊……）',
                }),
                Map({
                    role: '旁白',
                    text: '随后喵喵公主和汪汪圣骑士将王宫里昏睡过去的人们都救醒了过来。',
                }),
                Map({
                    role: '旁白',
                    text: '其余的银色斗篷也都尽数被消灭了。',
                }),
                Map({
                    role: '旁白',
                    text: '王宫中。',
                }),
                Map({
                    role: 'cat',
                    text: '汪汪圣骑士，这次的事件中，多亏了你的表现，使得王国化险为夷。',
                }),
                Map({
                    role: 'cat',
                    text: '你功不可没啊。',
                }),
                Map({
                    role: 'dog',
                    text: '也没有啦，哈哈。',
                }),
                Map({
                    role: 'cat',
                    text: '笑屁啊！',
                }),
                Map({
                    role: 'cat',
                    text: '你之前竟敢瞒着我！说自己是什么旅人？',
                }),
                Map({
                    role: 'dog',
                    text: '这个……这个……',
                }),
                Map({
                    role: 'dog',
                    text: '迫不得已……公主就不要在意这个了。',
                }),
                Map({
                    role: 'cat',
                    text: '你说不在意，就不在意的？',
                }),
                Map({
                    role: 'dog',
                    text: '当然不是，当然不是。',
                }),
                Map({
                    role: 'dog',
                    text: '请喵喵公主开恩啊。',
                }),
                Map({
                    role: 'cat',
                    text: '这还差不多。',
                }),
                Map({
                    role: 'cat',
                    text: '那到底原谅不原谅你呢？',
                }),
                Map({
                    role: 'cat',
                    text: Map({
                        A: '原谅',
                        B: '不原谅',
                    }),
                    choose: Map({
                        '原谅': '（原谅她吧，我大人有大量。）',
                        '不原谅': '（还是原谅他吧，我才不和小臭汪计较。）',
                    }),
                    point: Map({
                        '原谅': 1,
                        '不原谅': 1,
                    }),
                    change: '',
                    type: 'select',
                }),
                Map({
                    role: 'cat',
                    text: '好了，看在你救了喵喵王国的份上，这件事就算了。',
                }),
                Map({
                    role: 'dog',
                    text: '（太好了~）谢谢喵喵公主。',
                }),
                Map({
                    role: 'cat',
                    text: '对了，你好像对这次的事件还有些看法，你想要说什么吗？',
                }),
                Map({
                    role: 'dog',
                    text: '怎么说呢，我想来想去，觉得有三个疑点。',
                }),
                Map({
                    role: 'cat',
                    text: '说来听听。',
                }),
                Map({
                    role: 'dog',
                    text: '首先，银色斗篷到底是什么人？',
                }),
                Map({
                    role: 'dog',
                    text: '其次，静风湖底下的黑暗洞穴里为什么会有魔法阵？',
                }),
                Map({
                    role: 'dog',
                    text: '最后，为什么银色斗篷到最后没有对我们下毒手？',
                }),
                Map({
                    role: 'cat',
                    text: '的确，这三点都很奇怪，那你想出来了吗？',
                }),
                Map({
                    role: 'dog',
                    text: '嗯，我思前想后，终于知道这次事件的来龙去脉了。',
                }),
                Map({
                    role: 'cat',
                    text: '来龙去脉？也就是你知道是什么人所为的了？',
                }),
                Map({
                    role: 'dog',
                    text: '可以这么说。',
                }),
                Map({
                    role: 'cat',
                    text: '那是谁？',
                }),
                Map({
                    role: 'dog',
                    text: '其实，并没有人，或者说，银色斗篷根本就不是一个人！',
                }),
                Map({
                    role: 'cat',
                    text: '什么意思？！',
                }),
                Map({
                    role: 'dog',
                    text: '根据我的猜想，银色斗篷应该是古代时候的某个大魔导师的残念。',
                }),
                Map({
                    role: 'cat',
                    text: '大魔导师的残念？',
                }),
                Map({
                    role: 'dog',
                    text: '是的。',
                }),
                Map({
                    role: 'dog',
                    text: '我去查过历史文献，根据记载星风村是百年前的一个村庄。',
                }),
                Map({
                    role: 'dog',
                    text: '那个时候各处都流行着一种瘟疫，人们称之为亡魂病。',
                }),
                Map({
                    role: 'cat',
                    text: '亡魂病？！这个我好像听说过，得病的人会变得像亡魂一般怨念，最后怨念而死。',
                }),
                Map({
                    role: 'dog',
                    text: '没错，得了这种病的人，在当时只有死这一条路。',
                }),
                Map({
                    role: 'cat',
                    text: '所以星风村也因为亡魂病灭亡了？',
                }),
                Map({
                    role: 'dog',
                    text: '没错，这病直到圣光的出现才逐渐被治愈。',
                }),
                Map({
                    role: 'cat',
                    text: '原来如此，圣光也只不过这一百年才开始兴盛。',
                }),
                Map({
                    role: 'dog',
                    text: '是的，所以当时的王室应该是采取了极端手段，这也是无奈之举。',
                }),
                Map({
                    role: 'cat',
                    text: '那银色斗篷就是星风村的一员？',
                }),
                Map({
                    role: 'dog',
                    text: '不然，银色斗篷应该是当时被派去星风村的大魔导师。',
                }),
                Map({
                    role: 'dog',
                    text: '面对亡魂病，当时就算是大魔导师也无能为力吧。',
                }),
                Map({
                    role: 'cat',
                    text: '我知道了，强大到无所不能的大魔导师却对亡魂病无能为力，那种感觉……',
                }),
                Map({
                    role: 'dog',
                    text: '是的，以至于他来到静风湖湖底的黑暗洞穴寻求圣泉的帮助，但不知为何原因却没能成功吧。',
                }),
                Map({
                    role: 'cat',
                    text: '原来如此。',
                }),
                Map({
                    role: 'dog',
                    text: '那之后，他的意识或者说怨念逐渐堆积，慢慢的开始仇视灭村的王室。',
                }),
                Map({
                    role: 'cat',
                    text: '那为何直到今天才行动呢？',
                }),
                Map({
                    role: 'dog',
                    text: '这个……说来也可能是因为我们的关系。',
                }),
                Map({
                    role: 'cat',
                    text: '我们？',
                }),
                Map({
                    role: 'dog',
                    text: '是的，喵喵公主你还记不记得你掉起的鲤鱼王？',
                }),
                Map({
                    role: 'cat',
                    text: '记得啊，这怎么了？',
                }),
                Map({
                    role: 'dog',
                    text: '鲤鱼王这种鱼，说来也是神奇，具有很强的“稳定”能力。',
                }),
                Map({
                    role: 'dog',
                    text: '这种稳定的能力用魔法的话说就是封印的力量。',
                }),
                Map({
                    role: 'dog',
                    text: '只要有鲤鱼王在，那一方水域几乎都是“国泰民安”的。',
                }),
                Map({
                    role: 'cat',
                    text: '所以说，当我们掉起那条鲤鱼王的时候……',
                }),
                Map({
                    role: 'dog',
                    text: '没错，那个时候封印就解开了。',
                }),
                Map({
                    role: 'dog',
                    text: '故而释放了这积怨了几百年的怨念，化成了银色斗篷来复仇。',
                }),
                Map({
                    role: 'cat',
                    text: '但他始终没能杀了一个人啊。',
                }),
                Map({
                    role: 'dog',
                    text: '估计大魔导师还有一丝善念吧。',
                }),
                Map({
                    role: 'cat',
                    text: '哎，没想到这几百年的事情，偏偏就今天遇上了。',
                }),
                Map({
                    role: 'dog',
                    text: '是呢。',
                }),
                Map({
                    role: 'cat',
                    text: '是什么是呀，你们圣骑士不会早点预防这种事情吗？',
                }),
                Map({
                    role: 'dog',
                    text: '这个……我们也无法预料啊……',
                }),
                Map({
                    role: 'cat',
                    text: '切~',
                }),
                Map({
                    role: 'dog',
                    text: '哈哈~',
                }),
                Map({
                    role: 'dog',
                    text: '对了，我还找到两个星风村后代的血脉，还是两个孩子。',
                }),
                Map({
                    role: 'cat',
                    text: '哦？',
                }),
                Map({
                    role: 'dog',
                    text: '波比~波莉~',
                }),
                Map({
                    role: 'bobi',
                    text: '我是可爱的波比~喵喵公主你好。',
                }),
                Map({
                    role: 'boli',
                    text: '我是可爱的波莉~喵喵公主你好。',
                }),
                Map({
                    role: 'dog',
                    text: '两个孩子都很可爱吧。',
                }),
                Map({
                    role: 'cat',
                    text: '是啊~是啊~',
                }),
                Map({
                    role: 'dog',
                    text: '那都让他们留在王宫吧。',
                }),
                Map({
                    role: 'bobi',
                    text: '可以吗？喵喵公主。',
                }),
                Map({
                    role: 'boli',
                    text: '求求你了，喵喵公主。',
                }),
                Map({
                    role: 'cat',
                    text: '当然可以啦。',
                }),
                Map({
                    role: 'dog',
                    text: '嗯。那就没别的事了，我走啦。',
                }),
                Map({
                    role: 'cat',
                    text: '那就再见啦，小圣骑士。',
                }),
                Map({
                    role: 'dog',
                    text: '再见啦，喵喵公主。',
                }),
                Map({
                    role: '旁白',
                    text: '圣骑士汪汪告别了公主，继续保卫者喵喵王国。',
                }),
            ]
        ),
        count: 0,
        text: 'the first dialog'
    };
}

export function getCommonDialog() {
    return {
        type: FIFTH_GETCOMMONDIALOG,
        text: 'get common dialog'
    };
}

export function getChooseDialog(choose) {
    return {
        type: FIFTH_GETCHOOSEDIALOG,
        text: 'get chose text',
        choose: choose
    };
}

export function getPoint() {
    return {
        type: FIFTH_GETPOINT,
        text: 'get all point',
    };
}
