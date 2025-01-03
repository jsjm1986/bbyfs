// 场景分类
const CATEGORIES = {
    DAILY: '日常生活',
    CAREER: '事业发展',
    FAMILY: '家庭关系',
    FINANCE: '经济决策',
    SOCIAL: '社交管理'
};

// 难度等级
const DIFFICULTY = {
    EASY: { level: 1, name: '入门', multiplier: 1 },
    MEDIUM: { level: 2, name: '进阶', multiplier: 1.2 },
    HARD: { level: 3, name: '高级', multiplier: 1.5 }
};

// 驭夫小游戏场景数据
const gameScenarios = [
    {
        id: 1,
        title: "加薪的时机",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫最近工作表现很好，但是一直没有主动找领导谈加薪。作为妻子的你，要如何巧妙地激发他的上进心？",
        options: [
            {
                text: "直接告诉他应该去要求加薪",
                score: 60,
                feedback: "太过直接可能会让丈夫产生抵触情绪，建议采用更柔和的方式。"
            },
            {
                text: "分享同事家庭的正面例子，激发他的斗志",
                score: 85,
                feedback: "不错的选择！这样可以自然地激发丈夫的上进心，让他自己意识到问题。"
            },
            {
                text: "撒娇表示最近想给父母买件礼物，委婉暗示家庭收入",
                score: 90,
                feedback: "很聪明的方法！既照顾了丈夫的面子，又能让他感受到家庭责任。"
            }
        ]
    },
    {
        id: 2,
        title: "婆媳关系",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.EASY,
        description: "婆婆总是在周末一大早就来家里，打扰二人世界。如何妥善处理这个情况？",
        options: [
            {
                text: "委婉地跟丈夫说想周末多点二人世界的时间",
                score: 95,
                feedback: "完美的处理方式！让丈夫自己去平衡这层关系最为妥当。"
            },
            {
                text: "直接告诉婆婆想休息，请她不要来太早",
                score: 50,
                feedback: "太过直接可能会伤害婆媳关系，不妨试试更温和的方式。"
            },
            {
                text: "周末早起带丈夫出门约会，避开婆婆",
                score: 75,
                feedback: "虽然能解决眼前问题，但长期来看不是最佳方案。"
            }
        ]
    },
    {
        id: 3,
        title: "消费决策",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你看中了一款包包，但价格不菲。如何让丈夫心甘情愿地支持你购买？",
        options: [
            {
                text: "强调这是限量版，买到就是赚到",
                score: 65,
                feedback: "单纯强调商品价值可能说服力不够，试试结合感情因素。"
            },
            {
                text: "先肯定他最近的付出，然后温柔地表达这个愿望",
                score: 95,
                feedback: "高情商的选择！既照顾了丈夫的自尊心，又能达到目的。"
            },
            {
                text: "说闺蜜的老公都给买了，暗示对比",
                score: 40,
                feedback: "这种比较容易伤害丈夫的自尊心，不建议使用。"
            }
        ]
    },
    {
        id: 4,
        title: "生活习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.EASY,
        description: "丈夫总是把袜子随处乱放，如何让他改掉这个坏习惯？",
        options: [
            {
                text: "每次看到就生气指责他邋遢",
                score: 30,
                feedback: "指责只会让丈夫产生逆反心理，不利于问题解决。"
            },
            {
                text: "默默收拾，等他自己意识到",
                score: 60,
                feedback: "虽然体现了包容，但可能会让这个习惯一直持续下去。"
            },
            {
                text: "买个可爱的收纳筐，撒娇说'亲爱的，这是专门为你准备的'",
                score: 95,
                feedback: "既解决了问题，又不伤感情，还能增进感情，是个绝妙的方法！"
            }
        ]
    },
    {
        id: 5,
        title: "亲子教育",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "孩子最近成绩下滑，丈夫主张严厉管教，你认为应该怎么办？",
        options: [
            {
                text: "支持丈夫的严厉态度",
                score: 50,
                feedback: "过于严厉可能会适得其反，建议采用更科学的教育方式。"
            },
            {
                text: "私下和孩子沟通，暗中调节",
                score: 70,
                feedback: "虽然出发点好，但夫妻在教育理念上应该统一。"
            },
            {
                text: "和丈夫深入交流，共同制定合理的教育计划",
                score: 90,
                feedback: "完美！既尊重了丈夫的意见，又能引导他采用更科学的教育方式。"
            }
        ]
    },
    {
        id: 6,
        title: "深夜加班",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.EASY,
        description: "丈夫最近经常加班到很晚才回家，你怀疑他是在和女同事约会。如何智慧地处理这个情况？",
        options: [
            {
                text: "生气质问他是不是有了外遇",
                score: 30,
                feedback: "直接质问会让丈夫产生抵触情绪，也可能伤害夫妻感情。"
            },
            {
                text: "默默跟踪他，看看是否真的在加班",
                score: 50,
                feedback: "这种方式会破坏互信关系，不是明智的选择。"
            },
            {
                text: "温柔地表达想念，主动送宵夜到公司关心他",
                score: 95,
                feedback: "完美的处理方式！既表达了关心，又能了解实际情况，还能增进感情。"
            }
        ]
    },
    {
        id: 7,
        title: "亲友借钱",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你的闺蜜想借一笔钱创业，数额不小。丈夫对此有些抵触，你该如何处理？",
        options: [
            {
                text: "瞒着丈夫偷偷借给闺蜜",
                score: 20,
                feedback: "这种行为会严重损害夫妻信任，非常不可取。"
            },
            {
                text: "和丈夫一起分析利弊，尊重他的决定",
                score: 90,
                feedback: "理性且尊重的态度，这样的沟通方式最容易达成共识。"
            },
            {
                text: "先说服丈夫投资可能带来的收益",
                score: 70,
                feedback: "考虑到经济因素是好的，但要注意平衡友情和夫妻关系。"
            }
        ]
    },
    {
        id: 8,
        title: "过年走亲",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.EASY,
        description: "春节期间，婆家和娘家同时要求去各自家过年。如何平衡这个局面？",
        options: [
            {
                text: "强硬要求先回娘家",
                score: 40,
                feedback: "这样容易引起家庭矛盾，不是明智的选择。"
            },
            {
                text: "和丈夫商量，合理安排时间分别探望",
                score: 95,
                feedback: "非常棒！这样既照顾到了双方家庭，又体现了智慧。"
            },
            {
                text: "让丈夫自己做决定，不给意见",
                score: 60,
                feedback: "虽然避免了冲突，但没有主动参与解决问题。"
            }
        ]
    },
    {
        id: 9,
        title: "育儿分歧",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想给孩子报一个昂贵的兴趣班，丈夫认为太贵了不值得。如何说服他？",
        options: [
            {
                text: "列举其他家长都报名的例子，施加压力",
                score: 50,
                feedback: "比较和压力可能会适得其反。"
            },
            {
                text: "带丈夫实地参观，让他了解课程价值",
                score: 90,
                feedback: "很好的方式！让丈夫亲身体验，更容易理解和支持。"
            },
            {
                text: "表示可以用自己的零花钱支付一部分",
                score: 85,
                feedback: "展现了为家庭分担的态度，是个不错的选择。"
            }
        ]
    },
    {
        id: 10,
        title: "社交困扰",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.EASY,
        description: "丈夫的朋友圈很广，经常被邀请参加应酬，你担心他的健康和安全。该怎么办？",
        options: [
            {
                text: "每次都打电话催他早点回家",
                score: 40,
                feedback: "过度干预可能会让丈夫感到压力和不被信任。"
            },
            {
                text: "准备醒酒汤和夜宵，在家等他",
                score: 85,
                feedback: "体贴周到的做法，让丈夫感受到温暖。"
            },
            {
                text: "和他约定重要场合陪同，其他时候适度放权",
                score: 95,
                feedback: "完美的平衡！既表达了关心，又给予了适当的自由空间。"
            }
        ]
    },
    {
        id: 11,
        title: "购房决策",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "你想换一个更大的房子，但丈夫觉得现在的房子够住。如何说服他支持换房？",
        options: [
            {
                text: "抱怨现在的房子各种不好，制造压力",
                score: 40,
                feedback: "负面情绪容易引起对抗，不利于达成共识。"
            },
            {
                text: "带他看看心仪的房子，描绘美好的未来生活蓝图",
                score: 90,
                feedback: "很棒！让丈夫感受到换房带来的美好愿景，更容易获得支持。"
            },
            {
                text: "计算详细的财务规划，展示换房的可行性",
                score: 85,
                feedback: "理性分析是个好方法，展示了你的深思熟虑。"
            }
        ]
    },
    {
        id: 12,
        title: "事业规划",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "你想辞职创业，但丈夫担心风险太大。如何获得他的支持？",
        options: [
            {
                text: "强调自己有能力，不需要他的意见",
                score: 30,
                feedback: "这种态度会伤害丈夫的自尊心，不利于家庭和谐。"
            },
            {
                text: "详细展示创业计划和风险控制方案",
                score: 90,
                feedback: "专业且负责任的态度，能够消除丈夫的顾虑。"
            },
            {
                text: "先小规模尝试，用成果说服他",
                score: 85,
                feedback: "循序渐进的方式很明智，既降低风险又容易获得支持。"
            }
        ]
    },
    {
        id: 13,
        title: "亲密关系",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "最近丈夫对你的关注度降低，总是忙于工作。如何重燃激情？",
        options: [
            {
                text: "抱怨他不关心你，威胁离婚",
                score: 20,
                feedback: "过激的言论只会加剧矛盾，破坏感情。"
            },
            {
                text: "打扮得漂漂亮亮，制造浪漫惊喜",
                score: 95,
                feedback: "很聪明！用行动唤起丈夫的关注，重新点燃爱的火花。"
            },
            {
                text: "主动关心他的工作，创造共处时光",
                score: 90,
                feedback: "体贴入微的做法，既照顾到丈夫的压力，又能增进感情。"
            }
        ]
    },
    {
        id: 14,
        title: "家庭聚会",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想在家举办朋友聚会，但丈夫不太喜欢热闹。怎么办？",
        options: [
            {
                text: "不管他的感受，我行我素",
                score: 30,
                feedback: "忽视伴侣感受会影响感情，不是明智之选。"
            },
            {
                text: "选在他出差时办，避开他",
                score: 50,
                feedback: "虽然避免了直接冲突，但长期来看不利于关系发展。"
            },
            {
                text: "提前和他商量，控制聚会规模和时长",
                score: 95,
                feedback: "完美的处理方式！既尊重了丈夫，又兼顾了自己的社交需求。"
            }
        ]
    },
    {
        id: 15,
        title: "健康管理",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫饮食不规律，总爱吃垃圾食品，如何让他注意健康？",
        options: [
            {
                text: "直接把垃圾食品都扔掉",
                score: 40,
                feedback: "强制的方式会引起反感，效果适得其反。"
            },
            {
                text: "准备美味的健康食品，培养他的健康饮食习惯",
                score: 95,
                feedback: "用爱心和行动感化丈夫，是最好的改变方式。"
            },
            {
                text: "讲述其他人因不健康饮食导致的疾病案例",
                score: 70,
                feedback: "虽然有警示作用，但可能会引起不必要的焦虑。"
            }
        ]
    },
    {
        id: 16,
        title: "兴趣爱好",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫沉迷打游戏，你想让他陪你一起运动。如何说服他？",
        options: [
            {
                text: "趁他不在把游戏设备藏起来",
                score: 30,
                feedback: "这种行为会严重影响夫妻信任关系。"
            },
            {
                text: "找一些有趣的双人运动项目，激发他的兴趣",
                score: 90,
                feedback: "很好的方法！通过有趣的方式引导，更容易被接受。"
            },
            {
                text: "和他约定游戏时间，平衡运动和游戏",
                score: 85,
                feedback: "理性且体贴的做法，既尊重他的爱好，又照顾到健康。"
            }
        ]
    },
    {
        id: 17,
        title: "情绪管理",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫工作压力大，经常无故发脾气，该如何应对？",
        options: [
            {
                text: "以牙还牙，让他体会被吼的感受",
                score: 20,
                feedback: "以暴制暴只会让情况更糟糕。"
            },
            {
                text: "默默承受，等他心情好转",
                score: 50,
                feedback: "过分忍让可能会助长不良情绪表达方式。"
            },
            {
                text: "理解他的压力，创造轻松的家庭氛围",
                score: 95,
                feedback: "很棒！用理解和关爱化解压力，是最佳方式。"
            }
        ]
    },
    {
        id: 18,
        title: "家务分工",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "想让丈夫分担家务，但他总说自己很累。如何让他主动承担？",
        options: [
            {
                text: "列出详细的家务清单，要求他必须完成",
                score: 50,
                feedback: "过于强硬的要求可能会适得其反。"
            },
            {
                text: "把家务变成游戏，一起完成更有趣",
                score: 90,
                feedback: "创意十足！让家务变得有趣能提高参与积极性。"
            },
            {
                text: "先表扬他的辛苦，再委婉表达需要帮助",
                score: 85,
                feedback: "情商很高的做法，既照顾面子又能达到目的。"
            }
        ]
    },
    {
        id: 19,
        title: "投资理财",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "你发现了一个不错的理财产品，想投入一笔资金，但丈夫比较保守。如何说服他？",
        options: [
            {
                text: "直接用自己的私房钱投资，不告诉他",
                score: 30,
                feedback: "私下投资可能会影响夫妻信任关系，不是明智之选。"
            },
            {
                text: "详细分析收益和风险，制作投资计划书给他看",
                score: 90,
                feedback: "专业的分析和坦诚的沟通最容易获得信任和支持。"
            },
            {
                text: "先投资小额资金试试水，用实际收益说服他",
                score: 85,
                feedback: "循序渐进的方式不错，可以降低风险并积累信任。"
            }
        ]
    },
    {
        id: 20,
        title: "装修风格",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "家里要装修，你喜欢温馨浪漫的风格，丈夫却想要简约现代。如何协调？",
        options: [
            {
                text: "坚持自己的想法，毕竟主要是女人打理家务",
                score: 40,
                feedback: "忽视丈夫的意见可能会影响他对家的归属感。"
            },
            {
                text: "一起看装修案例，找到能兼顾双方审美的折中方案",
                score: 95,
                feedback: "完美的处理方式！共同参与决策，找到平衡点。"
            },
            {
                text: "分区装修，不同房间采用不同风格",
                score: 80,
                feedback: "创意的解决方案，但要注意整体风格的协调。"
            }
        ]
    },
    {
        id: 21,
        title: "工作调动",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫收到外地升职机会，但你不想离开现在的城市。如何商议？",
        options: [
            {
                text: "直接表态绝不搬家，让他选择放弃",
                score: 30,
                feedback: "强硬的态度会伤害感情，也可能影响丈夫的事业发展。"
            },
            {
                text: "共同分析两地的机遇与挑战，做出最优选择",
                score: 90,
                feedback: "理性分析和共同决策是处理重大问题的最佳方式。"
            },
            {
                text: "建议先异地尝试一段时间，再做长期决定",
                score: 85,
                feedback: "谨慎的过渡方案，既照顾了丈夫的事业，又不会贸然改变生活。"
            }
        ]
    },
    {
        id: 22,
        title: "生育计划",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想要二胎，但你觉得精力和经济压力都很大。如何沟通？",
        options: [
            {
                text: "直接拒绝，表示自己承担不了这么多",
                score: 40,
                feedback: "过于直接的拒绝可能会伤害丈夫的感受。"
            },
            {
                text: "详细列出当前家庭状况，共同规划未来",
                score: 90,
                feedback: "理性分析现状，共同规划是最佳选择。"
            },
            {
                text: "建议等大宝再大点，家庭条件更好时再考虑",
                score: 85,
                feedback: "温和的方式表达顾虑，给出合理的替代方案。"
            }
        ]
    },
    {
        id: 23,
        title: "婆媳关系",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "婆婆经常对你的教育方式指手画脚，丈夫却总是保持沉默。如何处理？",
        options: [
            {
                text: "和婆婆直接争辩，表达不满",
                score: 30,
                feedback: "直接对抗会加剧矛盾，影响家庭和谐。"
            },
            {
                text: "私下和丈夫沟通，让他在合适时机和母亲沟通",
                score: 95,
                feedback: "明智的选择！通过丈夫化解矛盾是最佳方式。"
            },
            {
                text: "适当采纳婆婆建议，但保持自己的教育原则",
                score: 85,
                feedback: "既显示出尊重，又保持了自己的立场，是个不错的平衡。"
            }
        ]
    },
    {
        id: 24,
        title: "个人隐私",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫总喜欢看你的手机，你觉得这侵犯了隐私。怎么办？",
        options: [
            {
                text: "设置复杂密码，拒绝让他看",
                score: 40,
                feedback: "这样可能会加深丈夫的疑虑和不安全感。"
            },
            {
                text: "和他深入交流，建立互信的界限",
                score: 95,
                feedback: "很好！开放沟通是建立信任的最佳方式。"
            },
            {
                text: "主动分享生活，减少他的猜疑",
                score: 85,
                feedback: "主动增进了解和信任，是个不错的方法。"
            }
        ]
    },
    {
        id: 25,
        title: "休闲娱乐",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "周末你想去逛街购物，丈夫却想宅在家打游戏。如何协调？",
        options: [
            {
                text: "威胁他如果不陪你，以后都不理他",
                score: 30,
                feedback: "情绪化的威胁只会伤害感情。"
            },
            {
                text: "提议先陪他打一会游戏，再一起出门",
                score: 90,
                feedback: "聪明的安排！既照顾了双方需求，又能增进感情。"
            },
            {
                text: "把购物变成约会，承诺不会花太长时间",
                score: 85,
                feedback: "很好的建议，让简单的购物变成浪漫的约会。"
            }
        ]
    },
    {
        id: 26,
        title: "亲友关系",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "你最好的闺蜜和丈夫关系很差，经常发生争执。如何调和？",
        options: [
            {
                text: "站在闺蜜一边，指责丈夫太计较",
                score: 30,
                feedback: "偏袒任何一方都不利于问题的解决。"
            },
            {
                text: "分开安排社交活动，避免他们碰面",
                score: 70,
                feedback: "虽然能避免冲突，但长期来看不是最好的解决方案。"
            },
            {
                text: "找机会促进双方了解，化解误会",
                score: 95,
                feedback: "高情商的处理方式！促进理解是解决问题的根本。"
            }
        ]
    },
    {
        id: 27,
        title: "消费观念",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫觉得你买的护肤品太贵了，总是抱怨浪费钱。如何化解这个矛盾？",
        options: [
            {
                text: "偷偷买，不让他知道真实价格",
                score: 30,
                feedback: "隐瞒消费会影响夫妻信任，不是长久之计。"
            },
            {
                text: "带他了解护肤品的功效和重要性，让他体验好的护肤品",
                score: 90,
                feedback: "很棒！通过亲身体验和科普来增进理解，是最好的方式。"
            },
            {
                text: "和他商量设定个人护肤预算，在预算内自由支配",
                score: 85,
                feedback: "理性规划的好方法，既尊重个人需求，又照顾家庭财务。"
            }
        ]
    },
    {
        id: 28,
        title: "亲子教育分歧",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "孩子在学校被同学欺负，丈夫主张让孩子打回去，但你觉得应该和老师沟通。如何处理？",
        options: [
            {
                text: "坚持己见，指责丈夫的教育方式太暴力",
                score: 40,
                feedback: "直接否定丈夫的观点可能会引起更大的分歧。"
            },
            {
                text: "先认同丈夫保护孩子的心，再提出更理性的解决方案",
                score: 95,
                feedback: "高情商的处理！既理解丈夫的出发点，又引导向更好的解决方式。"
            },
            {
                text: "建议先和老师沟通，如果无效再考虑其他办法",
                score: 80,
                feedback: "循序渐进的方法不错，但要注意与丈夫达成共识。"
            }
        ]
    },
    {
        id: 29,
        title: "工作与家庭",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "你最近工作升职，比丈夫赚得多，但发现他似乎有些自卑。如何安抚他？",
        options: [
            {
                text: "炫耀自己的能力，表示现在你能养家",
                score: 20,
                feedback: "这样会严重打击丈夫的自尊心，破坏家庭和谐。"
            },
            {
                text: "常和他分享工作中遇到的困难，请教他的意见",
                score: 95,
                feedback: "聪明的做法！让丈夫感受到他的重要性和价值。"
            },
            {
                text: "把工资都交给他管理，表示尊重他的家庭地位",
                score: 70,
                feedback: "虽然出发点好，但可能会强化传统性别角色，不利于平等关系的建立。"
            }
        ]
    },
    {
        id: 30,
        title: "生活习惯改变",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你开始健身减肥，需要调整家庭饮食结构，但丈夫不愿意配合。怎么办？",
        options: [
            {
                text: "强制要求全家都必须吃健康食品",
                score: 40,
                feedback: "强迫改变会引起反感，效果适得其反。"
            },
            {
                text: "准备两份不同的餐食，互不影响",
                score: 70,
                feedback: "尊重各自选择，但长期来看比较耗时耗力。"
            },
            {
                text: "研究美味的健康菜谱，让健康食品也能可口诱人",
                score: 95,
                feedback: "完美的解决方案！通过美味来自然引导习惯改变。"
            }
        ]
    },
    {
        id: 31,
        title: "家庭财务",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "你想要开始进行家庭理财规划，但丈夫觉得麻烦，不愿意记账。如何说服他？",
        options: [
            {
                text: "指责他不负责任，威胁要分开财务",
                score: 30,
                feedback: "这种方式会伤害感情，不利于达成共识。"
            },
            {
                text: "用理财软件简化记账过程，展示长期收益",
                score: 90,
                feedback: "很好！通过简化操作和展示好处来增加吸引力。"
            },
            {
                text: "先自己坚持记账一段时间，用实际效果说服他",
                score: 85,
                feedback: "以身作则是个好方法，用实际成效来说服更有说服力。"
            }
        ]
    },
    {
        id: 32,
        title: "亲友送礼",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "亲戚送了一件你们都不喜欢的家居用品，丈夫想要直接扔掉。该怎么处理？",
        options: [
            {
                text: "同意扔掉，反正又不会被发现",
                score: 40,
                feedback: "这样可能会伤害亲友感情，不够尊重。"
            },
            {
                text: "找机会转送给需要的人，物尽其用",
                score: 90,
                feedback: "既不浪费，又能帮助他人，是个很好的处理方式。"
            },
            {
                text: "先收起来，特殊场合摆出来应付一下",
                score: 75,
                feedback: "照顾了亲友感受，但不够真诚，也占用储物空间。"
            }
        ]
    },
    {
        id: 33,
        title: "邻里关系",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "楼上装修噪音太大，丈夫想上门理论。如何劝导他？",
        options: [
            {
                text: "支持他上门对质，维护家庭权益",
                score: 40,
                feedback: "容易激化矛盾，影响邻里关系。"
            },
            {
                text: "建议先礼貌沟通，了解装修计划和时间表",
                score: 95,
                feedback: "理性平和的处理方式，最容易达成共识。"
            },
            {
                text: "提议暂时外出避避，等装修结束再回来",
                score: 70,
                feedback: "虽然能避免冲突，但可能会增加额外支出，不是最佳选择。"
            }
        ]
    },
    {
        id: 34,
        title: "长辈意见",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "父母和公婆对你们的生活方式有不同意见，经常互相指责。如何平衡？",
        options: [
            {
                text: "让丈夫去和长辈们争论，你置身事外",
                score: 40,
                feedback: "推卸责任可能会加重丈夫的压力，不利于问题解决。"
            },
            {
                text: "和丈夫统一立场，共同与长辈们好好沟通",
                score: 95,
                feedback: "夫妻同心是处理家庭矛盾的关键，很好的选择！"
            },
            {
                text: "尽量减少双方长辈见面的机会",
                score: 60,
                feedback: "虽然能暂时避免冲突，但不是长久之计。"
            }
        ]
    },
    {
        id: 35,
        title: "职场应酬",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫的女同事在饭局上频繁敬酒，你作为妻子陪同参加，如何优雅应对？",
        options: [
            {
                text: "当场发脾气，指责女同事不懂分寸",
                score: 20,
                feedback: "这样会让丈夫在职场上很难堪，也显得缺乏涵养。"
            },
            {
                text: "优雅地代替丈夫挡酒，展现贤惠大方的一面",
                score: 95,
                feedback: "高情商的处理！既照顾了丈夫，又不失体面，让人挑不出毛病。"
            },
            {
                text: "以身体不适为由，提前带丈夫离开",
                score: 75,
                feedback: "虽然避免了尴尬，但可能影响丈夫的职场人际关系。"
            }
        ]
    },
    {
        id: 36,
        title: "前任困扰",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "偶然发现丈夫和前女友还在社交媒体上互动，如何处理？",
        options: [
            {
                text: "生气质问，要求立即删除拉黑前任",
                score: 30,
                feedback: "过激的反应会让丈夫产生逆反心理，不利于问题解决。"
            },
            {
                text: "主动增加生活情趣，让他无暇顾及其他",
                score: 90,
                feedback: "聪明的做法！用积极的方式吸引丈夫的注意力。"
            },
            {
                text: "和丈夫开诚布公地谈心，表达自己的不安",
                score: 85,
                feedback: "坦诚沟通是建立信任的好方法，但要注意表达方式。"
            }
        ]
    },
    {
        id: 37,
        title: "家庭规划",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想让父母来同住，但你觉得这样会影响二人世界。如何协商？",
        options: [
            {
                text: "直接拒绝，表示要维护小家庭的独立空间",
                score: 40,
                feedback: "过于直接的拒绝可能会伤害家庭关系。"
            },
            {
                text: "建议先短期同住试试，再做长期打算",
                score: 85,
                feedback: "谨慎的尝试方案，既尊重了丈夫的孝心，又保留了调整空间。"
            },
            {
                text: "提议在附近给父母租房，既尽孝又保持适度距离",
                score: 95,
                feedback: "完美的平衡！既照顾到了各方需求，又维护了小家的空间。"
            }
        ]
    },
    {
        id: 38,
        title: "生活仪式感",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想增加生活仪式感，但丈夫觉得太麻烦。如何让他配合？",
        options: [
            {
                text: "强迫他配合，不然就不高兴",
                score: 30,
                feedback: "强迫只会让他更加抗拒，得不偿失。"
            },
            {
                text: "从简单的小事做起，让他感受仪式感的美好",
                score: 95,
                feedback: "循序渐进的好方法！让他自然而然接受并爱上仪式感。"
            },
            {
                text: "把仪式感融入他喜欢的事情中",
                score: 90,
                feedback: "很棒的想法！结合他的兴趣点更容易获得配合。"
            }
        ]
    },
    {
        id: 39,
        title: "经济独立",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "你想要投资自己的事业，需要动用一部分家庭储蓄，如何说服丈夫？",
        options: [
            {
                text: "强调这是你的权利，不需要他同意",
                score: 30,
                feedback: "这种态度会伤害夫妻感情和信任基础。"
            },
            {
                text: "制作详细的商业计划书，展示投资回报",
                score: 90,
                feedback: "专业的态度最容易获得支持和理解。"
            },
            {
                text: "承诺只用一部分储蓄，保留安全垫",
                score: 85,
                feedback: "考虑周全的做法，既追求发展又保障家庭安全。"
            }
        ]
    },
    {
        id: 40,
        title: "育儿理念",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "你想送孩子去学习艺术，丈夫却想让孩子专注于学习。如何达成共识？",
        options: [
            {
                text: "坚持己见，认为艺术教育很重要",
                score: 40,
                feedback: "单方面坚持容易造成教育理念的对立。"
            },
            {
                text: "找专业的教育资料，和丈夫一起研究",
                score: 95,
                feedback: "理性且专业的做法！用科学的方式达成共识。"
            },
            {
                text: "先试听一段时间，用实际效果说话",
                score: 85,
                feedback: "实践出真知，是个不错的折中方案。"
            }
        ]
    },
    {
        id: 41,
        title: "社交媒体",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫觉得你在社交媒体上分享太多家庭生活，想让你少发一些。怎么处理？",
        options: [
            {
                text: "反驳这是你的自由，不接受干涉",
                score: 30,
                feedback: "这种态度会加深分歧，影响感情。"
            },
            {
                text: "理解他的隐私顾虑，适度调整分享内容",
                score: 95,
                feedback: "体贴的做法！既尊重了丈夫的感受，又保持适度的分享。"
            },
            {
                text: "和他商量哪些内容可以分享，哪些不行",
                score: 85,
                feedback: "开诚布公的沟通有助于达成共识。"
            }
        ]
    },
    {
        id: 42,
        title: "家庭聚餐",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "家庭聚餐时，丈夫的话很少，显得不合群。如何帮他融入？",
        options: [
            {
                text: "当众提醒他要多说话",
                score: 30,
                feedback: "这样会让丈夫更加尴尬，适得其反。"
            },
            {
                text: "适时把话题引到他熟悉的领域",
                score: 95,
                feedback: "贴心的做法！让他在自信的话题中自然展现。"
            },
            {
                text: "私下鼓励他，给予支持",
                score: 85,
                feedback: "温暖的支持很重要，但还需要实际的引导。"
            }
        ]
    },
    {
        id: 43,
        title: "购物决策",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫想买一个昂贵的电子产品，但你觉得当前不是最佳时机。如何劝说？",
        options: [
            {
                text: "直接说不行，现在没钱",
                score: 40,
                feedback: "过于生硬的拒绝可能会引起反感。"
            },
            {
                text: "分析家庭开支，展示更重要的消费计划",
                score: 95,
                feedback: "理性分析是最好的说服方式，既照顾感受又有说服力。"
            },
            {
                text: "建议等促销季节再买，还能省一笔钱",
                score: 85,
                feedback: "聪明的建议！既没有否定他的需求，又能节省开支。"
            }
        ]
    },
    {
        id: 44,
        title: "情绪安抚",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫在工作中遭遇挫折，整个人都很消沉。如何帮他重拾信心？",
        options: [
            {
                text: "说他没用，别人都能做好",
                score: 20,
                feedback: "打击丈夫的自尊心只会让情况更糟。"
            },
            {
                text: "分享他过去的成功经历，帮他找回自信",
                score: 95,
                feedback: "高情商的做法！用正面回忆激发信心是最佳方式。"
            },
            {
                text: "陪他放松娱乐，暂时忘记烦恼",
                score: 80,
                feedback: "关心体贴，但还需要帮助他面对和解决问题。"
            }
        ]
    },
    {
        id: 45,
        title: "家庭娱乐",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "想要和丈夫一起培养共同的兴趣爱好，但他总说没时间。怎么办？",
        options: [
            {
                text: "抱怨他不重视感情，威胁离婚",
                score: 30,
                feedback: "过激的言论只会伤害感情，无法解决问题。"
            },
            {
                text: "从他感兴趣的活动开始，慢慢培养共同话题",
                score: 95,
                feedback: "很棒的方法！从他的兴趣出发更容易获得配合。"
            },
            {
                text: "在家安排简单有趣的活动，降低参与门槛",
                score: 85,
                feedback: "不错的想法，既照顾时间又能增进感情。"
            }
        ]
    },
    {
        id: 46,
        title: "亲子时间",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫总是用手机打游戏，很少陪孩子。如何改善这种状况？",
        options: [
            {
                text: "当着孩子的面指责他不负责任",
                score: 30,
                feedback: "在孩子面前批评丈夫会影响父子关系和家庭和谐。"
            },
            {
                text: "设计亲子游戏，让父子互动变得有趣",
                score: 95,
                feedback: "创意十足！通过游戏形式增进父子感情是最佳选择。"
            },
            {
                text: "让孩子主动邀请爸爸一起玩",
                score: 85,
                feedback: "借助孩子的天真可爱来唤起丈夫的父爱，是个好方法。"
            }
        ]
    },
    {
        id: 47,
        title: "生日惊喜",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫生日快到了，但他说不用特意庆祝。如何给他一个温暖的惊喜？",
        options: [
            {
                text: "办个大型派对，邀请所有朋友",
                score: 70,
                feedback: "热闹是好事，但要考虑丈夫的性格和喜好。"
            },
            {
                text: "准备一个温馨的家庭晚宴，邀请最亲近的人",
                score: 95,
                feedback: "温馨贴心的安排！既有仪式感又不会让他感到压力。"
            },
            {
                text: "送一份实用的礼物就好",
                score: 80,
                feedback: "务实的选择，但可以再增添一些情感元素。"
            }
        ]
    },
    {
        id: 48,
        title: "压力疏导",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫最近工作压力很大，经常失眠。如何帮他缓解压力？",
        options: [
            {
                text: "建议他辞职，换个轻松的工作",
                score: 40,
                feedback: "过于简单化处理问题，没有考虑实际情况。"
            },
            {
                text: "陪他运动放松，按摩助眠，创造良好的睡眠环境",
                score: 95,
                feedback: "全方位的关怀！既帮助缓解压力，又改善身心状态。"
            },
            {
                text: "介绍他尝试冥想或瑜伽",
                score: 80,
                feedback: "不错的建议，但要考虑他的接受程度。"
            }
        ]
    },
    {
        id: 49,
        title: "家庭旅行",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "计划家庭旅行，但你和丈夫对目的地有分歧。如何协调？",
        options: [
            {
                text: "坚持自己的选择，因为你做了很多攻略",
                score: 40,
                feedback: "独断专行可能会影响旅行的愉悦感。"
            },
            {
                text: "列出各自心仪地点的优缺点，共同商议",
                score: 95,
                feedback: "理性且民主的方式！共同决策能增加旅行的期待感。"
            },
            {
                text: "寻找一个能满足双方需求的折中方案",
                score: 85,
                feedback: "懂得变通的好方法，考虑到了双方的诉求。"
            }
        ]
    },
    {
        id: 50,
        title: "理财分歧",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想把积蓄投资到朋友推荐的项目，但你觉得风险太大。如何处理？",
        options: [
            {
                text: "直接反对，说朋友不靠谱",
                score: 30,
                feedback: "贬低他的朋友会伤害感情，也不利于问题解决。"
            },
            {
                text: "建议先做详细的市场调研和风险评估",
                score: 95,
                feedback: "专业理性的建议！用数据说话最有说服力。"
            },
            {
                text: "提议先投资小额资金试水",
                score: 85,
                feedback: "谨慎的做法，既尊重他的想法，又控制了风险。"
            }
        ]
    },
    {
        id: 51,
        title: "健康饮食",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫喜欢吃高热量的垃圾食品，你担心他的健康。如何引导他改变饮食习惯？",
        options: [
            {
                text: "直接把家里的零食都扔掉",
                score: 30,
                feedback: "强制的方式会引起反感，不利于习惯的改变。"
            },
            {
                text: "学习制作健康美味的零食，慢慢替代垃圾食品",
                score: 95,
                feedback: "聪明的方法！用美味来吸引他接受健康饮食。"
            },
            {
                text: "分享一些健康饮食的知识和案例",
                score: 80,
                feedback: "知识普及很重要，但需要配合实际行动。"
            }
        ]
    },
    {
        id: 52,
        title: "长辈关系",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "婆婆总是对你的家务方式指手画脚，丈夫却保持沉默。如何处理这种情况？",
        options: [
            {
                text: "和婆婆争辩，坚持自己的方式",
                score: 30,
                feedback: "直接对抗会加剧矛盾，影响家庭和谐。"
            },
            {
                text: "适当采纳建议，同时巧妙展示自己的优点",
                score: 95,
                feedback: "高情商的处理！既给足面子又不失立场。"
            },
            {
                text: "请丈夫从中调解，化解矛盾",
                score: 85,
                feedback: "通过丈夫沟通是个好方法，但要注意技巧。"
            }
        ]
    },
    {
        id: 53,
        title: "事业发展",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "你获得了一个外地的升职机会，但需要异地工作。如何和丈夫商量？",
        options: [
            {
                text: "直接告诉他这是你的理想，必须支持",
                score: 40,
                feedback: "忽视伴侣感受会影响感情和决策质量。"
            },
            {
                text: "详细讨论两地发展机会，共同规划未来",
                score: 95,
                feedback: "理性且周到的做法！共同决策能增进理解和支持。"
            },
            {
                text: "建议先尝试一段时间，再做长期打算",
                score: 85,
                feedback: "谨慎的过渡方案，照顾到了双方的顾虑。"
            }
        ]
    },
    {
        id: 54,
        title: "个人时间",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫总是打扰你的个人护肤时间，如何让他理解并尊重你的私人空间？",
        options: [
            {
                text: "生气抱怨他不懂得体贴",
                score: 30,
                feedback: "负面情绪只会加剧矛盾，无法解决问题。"
            },
            {
                text: "和他约定固定的护肤时间，互相尊重",
                score: 95,
                feedback: "建立明确的时间界限，既照顾感受又维护空间。"
            },
            {
                text: "邀请他一起体验护肤，增进理解",
                score: 85,
                feedback: "有趣的互动方式，能增进感情和理解。"
            }
        ]
    },
    {
        id: 55,
        title: "家庭开支",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "每月的家庭开支超出预算，丈夫抱怨你花钱太多。如何化解这个问题？",
        options: [
            {
                text: "反驳他自己也经常乱花钱",
                score: 30,
                feedback: "互相指责只会加剧矛盾，无法解决问题。"
            },
            {
                text: "一起记账分析，找出合理的开支方案",
                score: 95,
                feedback: "理性分析是最好的解决方式，共同承担责任。"
            },
            {
                text: "主动节省开支，展示改进的决心",
                score: 85,
                feedback: "积极的态度值得肯定，但还需要双方共同努力。"
            }
        ]
    },
    {
        id: 56,
        title: "朋友圈子",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫不喜欢你的闺蜜，觉得她们太爱玩乐。如何平衡友情和婚姻？",
        options: [
            {
                text: "不理会他的意见，继续和闺蜜来往",
                score: 40,
                feedback: "忽视丈夫的感受可能会影响婚姻关系。"
            },
            {
                text: "邀请丈夫一起参与聚会，增进了解",
                score: 95,
                feedback: "开放包容的态度最容易化解误解。"
            },
            {
                text: "适当控制聚会频率，兼顾各方感受",
                score: 85,
                feedback: "平衡的做法，既维护友情又照顾婚姻。"
            }
        ]
    },
    {
        id: 57,
        title: "家庭决策",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "家里要买新家具，你和丈夫的品味差异很大。如何达成一致？",
        options: [
            {
                text: "坚持选择自己喜欢的，因为主要是你在家",
                score: 40,
                feedback: "独断专行会影响家庭和谐。"
            },
            {
                text: "一起去家居店实地看看，寻找双方都喜欢的风格",
                score: 95,
                feedback: "共同体验和选择能增进理解，找到平衡点。"
            },
            {
                text: "找专业的家居顾问给出建议",
                score: 85,
                feedback: "借助专业意见是个不错的选择。"
            }
        ]
    },
    {
        id: 58,
        title: "生活习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫的睡眠习惯很不规律，经常熬夜玩手机。如何帮他调整？",
        options: [
            {
                text: "趁他睡着后把手机藏起来",
                score: 30,
                feedback: "这种行为会破坏信任，不利于问题解决。"
            },
            {
                text: "营造温馨的睡眠环境，培养放松习惯",
                score: 95,
                feedback: "温柔细致的关怀最容易被接受。"
            },
            {
                text: "和他约定固定的睡眠时间",
                score: 85,
                feedback: "建立规律作息很重要，但要循序渐进。"
            }
        ]
    },
    {
        id: 59,
        title: "家庭聚会",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "家庭聚会上，丈夫的一个亲戚总是说一些让你不舒服的话。如何应对？",
        options: [
            {
                text: "当场反驳，据理力争",
                score: 40,
                feedback: "在公众场合争执会让场面尴尬，影响家庭和谐。"
            },
            {
                text: "巧妙转移话题，化解尴尬",
                score: 95,
                feedback: "高情商的处理方式！既维护了和谐氛围，又不失自己的立场。"
            },
            {
                text: "私下和丈夫商量，让他帮忙解决",
                score: 85,
                feedback: "通过丈夫处理是个不错的选择，但要注意表达方式。"
            }
        ]
    },
    {
        id: 60,
        title: "兴趣培养",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想和丈夫一起学习一项新的运动，但他总是找借口推脱。如何说服他？",
        options: [
            {
                text: "指责他不愿意陪你，威胁分手",
                score: 30,
                feedback: "过激的言论只会伤害感情，无法解决问题。"
            },
            {
                text: "找一些有趣的运动视频，激发他的兴趣",
                score: 90,
                feedback: "循序渐进的方式最容易被接受。"
            },
            {
                text: "邀请他先体验一次，不强求长期坚持",
                score: 85,
                feedback: "给予自由选择的空间，更容易获得配合。"
            }
        ]
    },
    {
        id: 61,
        title: "工作压力",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫最近工作压力很大，回家后经常发脾气。如何帮他缓解？",
        options: [
            {
                text: "也跟着发脾气，让他体会被吼的感受",
                score: 30,
                feedback: "以暴制暴只会让家庭氛围更加紧张。"
            },
            {
                text: "创造轻松的家庭氛围，做些他喜欢的食物",
                score: 95,
                feedback: "用温暖和关爱化解压力，是最好的方式。"
            },
            {
                text: "建议他找专业咨询师聊聊",
                score: 85,
                feedback: "寻求专业帮助是个好建议，但要注意表达方式。"
            }
        ]
    },
    {
        id: 62,
        title: "生活规划",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "你想要规划未来的生活目标，但丈夫觉得活在当下就好。如何沟通？",
        options: [
            {
                text: "批评他没有规划意识，太不负责任",
                score: 30,
                feedback: "指责只会让他产生抵触情绪。"
            },
            {
                text: "分享一些成功的家庭案例，激发他的规划意识",
                score: 95,
                feedback: "用正面例子引导是个很好的方式。"
            },
            {
                text: "从小目标开始，逐步培养规划意识",
                score: 85,
                feedback: "循序渐进的方式更容易被接受。"
            }
        ]
    },
    {
        id: 63,
        title: "家务分配",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫答应帮忙做家务，但总是做得不够好。如何引导他改进？",
        options: [
            {
                text: "嫌弃他做得不好，重新做一遍",
                score: 30,
                feedback: "这样会打击他的积极性，不利于培养好习惯。"
            },
            {
                text: "肯定他的付出，同时温和地给出建议",
                score: 95,
                feedback: "鼓励加引导的方式最容易被接受。"
            },
            {
                text: "一起做家务，在过程中示范正确方法",
                score: 85,
                feedback: "实践教学是个不错的选择。"
            }
        ]
    },
    {
        id: 64,
        title: "饮食习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫喜欢吃辛辣重口味的食物，但你担心他的胃。如何改变他的饮食习惯？",
        options: [
            {
                text: "直接把调味料都藏起来",
                score: 30,
                feedback: "强制的方式会引起反感。"
            },
            {
                text: "学习制作美味的清淡菜品，慢慢培养他的口味",
                score: 95,
                feedback: "用美食来改变习惯是最好的方式。"
            },
            {
                text: "分享一些养胃的知识，增加健康意识",
                score: 85,
                feedback: "知识普及配合行动是个好方法。"
            }
        ]
    },
    {
        id: 65,
        title: "社交媒体",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "发现丈夫经常和异性同事在社交媒体上互动，你感到不安。如何处理？",
        options: [
            {
                text: "生气质问，要求删除对方",
                score: 30,
                feedback: "过激的反应会影响夫妻感情。"
            },
            {
                text: "增加生活情趣，让他把注意力放在家庭上",
                score: 95,
                feedback: "用积极的方式吸引丈夫的注意力是最好的选择。"
            },
            {
                text: "和他开诚布公地谈谈你的感受",
                score: 85,
                feedback: "坦诚沟通很重要，但要注意方式方法。"
            }
        ]
    },
    {
        id: 66,
        title: "休闲时光",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "周末丈夫总是沉迷电子游戏，很少陪你。如何改善这种状况？",
        options: [
            {
                text: "趁他不在把游戏设备藏起来",
                score: 30,
                feedback: "这种行为会破坏信任关系。"
            },
            {
                text: "找一些双人游戏一起玩，增进感情",
                score: 95,
                feedback: "很棒的想法！既照顾了他的兴趣，又能增进感情。"
            },
            {
                text: "和他约定游戏时间，互不打扰",
                score: 85,
                feedback: "合理安排时间是个不错的选择。"
            }
        ]
    },
    {
        id: 67,
        title: "家庭教育",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "孩子在学校闯祸了，丈夫主张严厉惩罚，你觉得应该好好沟通。如何处理？",
        options: [
            {
                text: "支持丈夫的惩罚方式，保持教育一致",
                score: 40,
                feedback: "一味惩罚可能会适得其反，不利于孩子健康成长。"
            },
            {
                text: "先安抚丈夫情绪，共同了解孩子的想法再做决定",
                score: 95,
                feedback: "理性且富有爱心的做法！既照顾各方感受，又有助于解决问题。"
            },
            {
                text: "暗中安慰孩子，表示理解他的行为",
                score: 50,
                feedback: "父母意见不一致会让孩子无所适从。"
            }
        ]
    },
    {
        id: 68,
        title: "金钱管理",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫总是冲动消费，买一些不必要的东西。如何引导他理性消费？",
        options: [
            {
                text: "直接控制财政大权，不给他钱花",
                score: 30,
                feedback: "这种做法会伤害丈夫的自尊心，影响夫妻关系。"
            },
            {
                text: "一起制定月度预算，设立储蓄目标",
                score: 95,
                feedback: "科学的理财方式！共同规划更容易执行。"
            },
            {
                text: "在他每次想买东西时都提醒他省钱",
                score: 60,
                feedback: "过度干预可能会引起反感。"
            }
        ]
    },
    {
        id: 69,
        title: "生活情趣",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "婚后生活逐渐平淡，丈夫觉得缺少激情。如何增添生活乐趣？",
        options: [
            {
                text: "抱怨他不够浪漫，要求他改变",
                score: 30,
                feedback: "抱怨和要求只会加重对方压力。"
            },
            {
                text: "策划惊喜约会，创造浪漫时刻",
                score: 95,
                feedback: "主动创造浪漫，让生活充满期待和惊喜！"
            },
            {
                text: "一起学习新的兴趣爱好",
                score: 85,
                feedback: "共同成长是维系感情的好方法。"
            }
        ]
    },
    {
        id: 70,
        title: "健康关注",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫有轻微感冒但不肯吃药，坚持要上班。如何关心他的健康？",
        options: [
            {
                text: "强迫他请假在家休息",
                score: 40,
                feedback: "强迫可能会引起反感，影响关系。"
            },
            {
                text: "准备营养餐点和药品，温柔地表达关心",
                score: 95,
                feedback: "体贴入微的照顾最容易打动人心。"
            },
            {
                text: "尊重他的选择，但提醒他注意保暖",
                score: 80,
                feedback: "基本的关心到位，但可以做得更好。"
            }
        ]
    },
    {
        id: 71,
        title: "亲子活动",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "周末孩子想去游乐园，但丈夫想在家休息。如何协调这个矛盾？",
        options: [
            {
                text: "让丈夫自己在家，带孩子出去玩",
                score: 50,
                feedback: "虽然满足了孩子需求，但错过了家庭共处时光。"
            },
            {
                text: "设计一个轻松的亲子游戏，让爸爸也能在家享受天伦之乐",
                score: 95,
                feedback: "创意满分！既照顾了丈夫的需求，又让孩子开心。"
            },
            {
                text: "推迟出游计划，等大家都有精力再去",
                score: 80,
                feedback: "考虑周到，但要及时安排替代活动。"
            }
        ]
    },
    {
        id: 72,
        title: "工作选择",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想辞职创业，但你担心家庭收入不稳定。如何沟通？",
        options: [
            {
                text: "坚决反对，要求他安心上班",
                score: 30,
                feedback: "直接否定会打击丈夫的积极性和梦想。"
            },
            {
                text: "一起分析创业计划，评估风险与机遇",
                score: 95,
                feedback: "理性分析和支持的态度最容易达成共识。"
            },
            {
                text: "建议先兼职尝试，保留稳定工作",
                score: 85,
                feedback: "稳妥的建议，既支持梦想又控制风险。"
            }
        ]
    },
    {
        id: 73,
        title: "家庭氛围",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "最近家庭氛围有些压抑，丈夫和孩子都不太说话。如何改善？",
        options: [
            {
                text: "追问他们发生了什么事",
                score: 40,
                feedback: "过于直接的追问可能会让他们更加封闭。"
            },
            {
                text: "组织一次开心的家庭活动，缓解压力",
                score: 95,
                feedback: "用快乐的活动打破沉闷，是个聪明的选择！"
            },
            {
                text: "给予安静的陪伴和支持",
                score: 85,
                feedback: "体贴的做法，让家人感受到温暖。"
            }
        ]
    },
    {
        id: 74,
        title: "邻里纠纷",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "邻居投诉你家孩子太吵，丈夫想上门理论。如何化解矛盾？",
        options: [
            {
                text: "支持丈夫去争辩，维护家人权益",
                score: 40,
                feedback: "过于对抗可能会激化矛盾。"
            },
            {
                text: "先致歉并承诺改进，同时了解邻居的具体困扰",
                score: 95,
                feedback: "以和为贵，用理解和改进来化解矛盾。"
            },
            {
                text: "尽量避免与邻居接触",
                score: 60,
                feedback: "回避不是解决问题的好办法。"
            }
        ]
    },
    {
        id: 75,
        title: "职业规划",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫对目前的工作不满意，想要转行。如何帮助他做出明智的决定？",
        options: [
            {
                text: "让他继续现在的工作，不要冒险",
                score: 40,
                feedback: "过于保守可能会影响丈夫的职业发展和幸福感。"
            },
            {
                text: "帮他分析优势和兴趣，制定详细的转行计划",
                score: 95,
                feedback: "专业且支持的态度！既重视他的想法，又帮助他理性规划。"
            },
            {
                text: "建议他先兼职尝试新领域",
                score: 85,
                feedback: "稳妥的过渡方案，可以降低转行风险。"
            }
        ]
    },
    {
        id: 76,
        title: "家庭财富",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "你想投资一些理财产品，但丈夫更倾向于把钱存在银行。如何说服他？",
        options: [
            {
                text: "偷偷投资，等赚钱了再告诉他",
                score: 30,
                feedback: "背着丈夫做重要决定会影响夫妻信任。"
            },
            {
                text: "用数据对比不同理财方式的收益，共同制定投资策略",
                score: 95,
                feedback: "专业理性的分析最有说服力！"
            },
            {
                text: "先拿一小部分钱试试，让他看到实际收益",
                score: 85,
                feedback: "循序渐进的方式有助于建立信心。"
            }
        ]
    },
    {
        id: 77,
        title: "生活情调",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想要布置一个温馨浪漫的家，但丈夫觉得太花钱太麻烦。怎么办？",
        options: [
            {
                text: "不管他的意见，自己做主布置",
                score: 40,
                feedback: "忽视丈夫感受可能会影响家庭和谐。"
            },
            {
                text: "从小细节入手，循序渐进地改变家居环境",
                score: 95,
                feedback: "聪明的方法！渐进式的改变更容易被接受。"
            },
            {
                text: "一起看装修节目，培养共同审美",
                score: 85,
                feedback: "好主意！共同学习可以增进理解。"
            }
        ]
    },
    {
        id: 78,
        title: "亲子沟通",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "孩子更亲近你，不愿意和爸爸交流。如何改善父子关系？",
        options: [
            {
                text: "指责丈夫平时不关心孩子",
                score: 30,
                feedback: "指责只会加深父子隔阂。"
            },
            {
                text: "创造父子互动的机会，适时表扬丈夫的育儿表现",
                score: 95,
                feedback: "高情商的做法！既帮助建立感情，又鼓励丈夫参与育儿。"
            },
            {
                text: "让孩子多和爸爸单独相处",
                score: 85,
                feedback: "给予空间培养感情是个好方法。"
            }
        ]
    },
    {
        id: 79,
        title: "社交平衡",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫觉得你参加闺蜜聚会的频率太高。如何平衡友情和婚姻？",
        options: [
            {
                text: "反驳说他也经常和朋友聚会",
                score: 30,
                feedback: "互相指责无法解决问题。"
            },
            {
                text: "邀请丈夫偶尔一起参加聚会，增进理解",
                score: 95,
                feedback: "开放包容的态度最容易化解矛盾。"
            },
            {
                text: "合理安排时间，保证陪伴家人的质量",
                score: 85,
                feedback: "平衡各方需求的明智之选。"
            }
        ]
    },
    {
        id: 80,
        title: "健康习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫经常熬夜工作，你担心他的健康。如何帮他调整作息？",
        options: [
            {
                text: "每天催他早点睡觉",
                score: 40,
                feedback: "单纯的催促可能会适得其反。"
            },
            {
                text: "营造舒适的睡眠环境，陪他养成良好的作息习惯",
                score: 95,
                feedback: "温柔体贴的关心最容易被接受。"
            },
            {
                text: "分享一些熬夜危害健康的案例",
                score: 75,
                feedback: "适度的提醒有帮助，但不要过度施压。"
            }
        ]
    },
    {
        id: 81,
        title: "家庭时光",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫总是加班，很少参与家庭活动。如何让他多陪伴家人？",
        options: [
            {
                text: "抱怨他不重视家庭",
                score: 30,
                feedback: "负面情绪只会加重矛盾。"
            },
            {
                text: "策划有趣的家庭活动，提前和他协调时间",
                score: 95,
                feedback: "周到的安排最容易获得配合。"
            },
            {
                text: "在他方便的时候创造小型家庭活动",
                score: 85,
                feedback: "灵活机动的安排也是不错的选择。"
            }
        ]
    },
    {
        id: 82,
        title: "个人成长",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "你想报名一个提升课程，但费用不低。如何获得丈夫的支持？",
        options: [
            {
                text: "强调自己有权利追求提升",
                score: 40,
                feedback: "过于强势可能会引起反感。"
            },
            {
                text: "详细说明课程收益，展示对家庭的长远价值",
                score: 95,
                feedback: "理性分析加情感沟通的完美结合！"
            },
            {
                text: "承诺用自己的工资支付学费",
                score: 80,
                feedback: "表现出负责任的态度，但可以更好地沟通。"
            }
        ]
    },
    {
        id: 83,
        title: "家庭聚餐",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "婆婆做的菜不合你的口味，但丈夫希望你多吃点。如何应对？",
        options: [
            {
                text: "直接说不爱吃，拒绝勉强",
                score: 30,
                feedback: "直接拒绝会伤害婆婆的感情，影响家庭关系。"
            },
            {
                text: "适量食用，同时主动学习婆婆的拿手菜",
                score: 95,
                feedback: "既表达了尊重，又能增进婆媳感情，是个聪明的做法！"
            },
            {
                text: "默默吃完，但心里很不舒服",
                score: 60,
                feedback: "虽然顾全了面子，但长期压抑自己的感受不是好办法。"
            }
        ]
    },
    {
        id: 84,
        title: "生活习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫有乱扔衣服的习惯，屡教不改。如何解决？",
        options: [
            {
                text: "把衣服扔回给他，让他自己收拾",
                score: 40,
                feedback: "过激的行为可能会引发更多矛盾。"
            },
            {
                text: "布置温馨的收纳空间，让整理变得简单有趣",
                score: 95,
                feedback: "创造便利的环境，让好习惯更容易养成！"
            },
            {
                text: "每次都默默帮他收拾",
                score: 50,
                feedback: "过分包容可能会助长不良习惯。"
            }
        ]
    },
    {
        id: 85,
        title: "工作应酬",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫因工作需要经常出差，你感到孤单。如何处理？",
        options: [
            {
                text: "要求他换一份不用出差的工作",
                score: 30,
                feedback: "这样的要求可能会影响丈夫的事业发展。"
            },
            {
                text: "利用视频通话保持联系，把独处时光变成自我提升的机会",
                score: 95,
                feedback: "积极正面的态度，既支持丈夫工作，又充实自己！"
            },
            {
                text: "经常和闺蜜聚会排解寂寞",
                score: 75,
                feedback: "适度社交没问题，但要注意平衡。"
            }
        ]
    },
    {
        id: 86,
        title: "育儿观念",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "对于孩子的教育方式，你和丈夫意见不一。如何达成共识？",
        options: [
            {
                text: "坚持自己的教育方式，不理会丈夫的意见",
                score: 30,
                feedback: "独断专行会影响家庭和谐和孩子的健康成长。"
            },
            {
                text: "一起参加育儿讲座，学习科学的教育方法",
                score: 95,
                feedback: "共同学习和成长是最好的解决方式！"
            },
            {
                text: "找专业的家庭顾问咨询",
                score: 85,
                feedback: "寻求专业建议是个不错的选择。"
            }
        ]
    },
    {
        id: 87,
        title: "家庭开销",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "家里要装修，但你和丈夫对预算有分歧。如何协商？",
        options: [
            {
                text: "威胁说不装修就离婚",
                score: 20,
                feedback: "用极端的方式施压只会破坏感情。"
            },
            {
                text: "详细列出装修清单，分析性价比，找到平衡点",
                score: 95,
                feedback: "理性分析和沟通是解决问题的最佳方式！"
            },
            {
                text: "分期付款，减轻一次性支出压力",
                score: 85,
                feedback: "考虑实际情况，灵活处理的好方法。"
            }
        ]
    },
    {
        id: 88,
        title: "兴趣爱好",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫沉迷看球赛，忽略了家庭。如何引导他平衡兴趣和家庭？",
        options: [
            {
                text: "趁他不在把电视退订了",
                score: 30,
                feedback: "强制性的做法会引起强烈反感。"
            },
            {
                text: "了解球赛，一起观看，创造共同话题",
                score: 95,
                feedback: "聪明的做法！通过共同兴趣增进感情。"
            },
            {
                text: "和他约定看球时间，互不打扰",
                score: 85,
                feedback: "理性划分时间的好方法。"
            }
        ]
    },
    {
        id: 89,
        title: "社交活动",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫的朋友来家里做客，但你觉得他们太吵闹。如何处理？",
        options: [
            {
                text: "直接表达不满，要求他们安静点",
                score: 40,
                feedback: "过于直接的表达可能会影响丈夫的面子。"
            },
            {
                text: "准备一些茶点，引导他们到阳台或活动室聊天",
                score: 95,
                feedback: "既照顾了丈夫的社交需求，又巧妙地解决了问题！"
            },
            {
                text: "借故出门避开",
                score: 60,
                feedback: "虽然避免了冲突，但不利于长期相处。"
            }
        ]
    },
    {
        id: 90,
        title: "情感交流",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫最近心事重重，但不愿意和你分享。如何让他敞开心扉？",
        options: [
            {
                text: "一直追问到他说为止",
                score: 30,
                feedback: "过度追问会让他感到压力，适得其反。"
            },
            {
                text: "创造轻松的氛围，耐心等待他主动分享",
                score: 95,
                feedback: "体贴又有耐心的做法，最容易获得信任！"
            },
            {
                text: "通过他的朋友侧面了解情况",
                score: 70,
                feedback: "虽然出于关心，但可能会让他感觉被背叛。"
            }
        ]
    },
    {
        id: 91,
        title: "家庭规划",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想买一套更大的房子，但你觉得目前的房贷压力已经够大了。如何沟通？",
        options: [
            {
                text: "直接拒绝，说现在负担不起",
                score: 40,
                feedback: "直接否定可能会打击丈夫的积极性。"
            },
            {
                text: "一起分析家庭财务状况，制定长期购房计划",
                score: 95,
                feedback: "理性且有建设性的做法！共同规划更容易达成共识。"
            },
            {
                text: "建议先攒够首付再考虑",
                score: 80,
                feedback: "谨慎的建议，但可以更积极地规划。"
            }
        ]
    },
    {
        id: 92,
        title: "婚姻危机",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "发现丈夫最近经常和一个女同事单独吃饭。如何妥善处理？",
        options: [
            {
                text: "直接质问并要求断绝来往",
                score: 30,
                feedback: "过于激进的态度可能会适得其反。"
            },
            {
                text: "增加生活情趣，主动创造二人世界的浪漫",
                score: 95,
                feedback: "高情商的做法！用积极的方式维护感情。"
            },
            {
                text: "默默观察，收集更多证据",
                score: 50,
                feedback: "过分猜疑会影响夫妻感情。"
            }
        ]
    },
    {
        id: 93,
        title: "亲子教育",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "孩子在学校打架，老师建议转学，但丈夫不同意。如何处理？",
        options: [
            {
                text: "坚持己见，强行办理转学手续",
                score: 30,
                feedback: "独断专行会影响家庭和谐。"
            },
            {
                text: "深入了解孩子打架原因，和丈夫共同制定改善计划",
                score: 95,
                feedback: "负责任的态度！解决问题的根源才是关键。"
            },
            {
                text: "先和老师沟通，给孩子一次改过的机会",
                score: 85,
                feedback: "理性的处理方式，但需要更全面的解决方案。"
            }
        ]
    },
    {
        id: 94,
        title: "生活压力",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫因工作压力大而开始酗酒。如何帮助他？",
        options: [
            {
                text: "把家里的酒都倒掉，严格管控",
                score: 30,
                feedback: "强制的方式可能会加重他的压力。"
            },
            {
                text: "陪他运动健身，寻找健康的减压方式",
                score: 95,
                feedback: "积极正面的引导，帮助他建立健康的生活方式！"
            },
            {
                text: "建议他看心理医生",
                score: 80,
                feedback: "寻求专业帮助是好事，但要注意沟通方式。"
            }
        ]
    },
    {
        id: 95,
        title: "家庭矛盾",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "婆婆总是干预你们的生活方式，丈夫觉得要孝顺。如何平衡？",
        options: [
            {
                text: "要求丈夫站在你这边，对抗婆婆",
                score: 30,
                feedback: "让丈夫在母亲和妻子之间选择会加重他的压力。"
            },
            {
                text: "和丈夫商定界限，共同与婆婆温和沟通",
                score: 95,
                feedback: "既尊重孝道，又维护小家庭的独立性，很好的平衡！"
            },
            {
                text: "忍气吞声，维持表面和谐",
                score: 50,
                feedback: "长期压抑自己的感受不利于家庭关系。"
            }
        ]
    },
    {
        id: 96,
        title: "经济分歧",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想辞职创业，但你担心家庭经济不稳定。如何处理？",
        options: [
            {
                text: "坚决反对，威胁离婚",
                score: 20,
                feedback: "过激的反应会严重伤害感情。"
            },
            {
                text: "帮助分析创业计划，制定风险控制方案",
                score: 95,
                feedback: "专业且支持的态度！既支持梦想又确保家庭稳定。"
            },
            {
                text: "建议先兼职尝试，保留稳定工作",
                score: 85,
                feedback: "稳妥的建议，但要更积极地参与规划。"
            }
        ]
    },
    {
        id: 97,
        title: "社交网络",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫觉得你在社交媒体上晒娃太多，担心孩子隐私。如何处理？",
        options: [
            {
                text: "反驳说这是你的自由",
                score: 30,
                feedback: "忽视丈夫的担忧会影响家庭和谐。"
            },
            {
                text: "理解他的顾虑，共同制定分享原则",
                score: 95,
                feedback: "理性且体贴的做法！既保护孩子又维护家庭关系。"
            },
            {
                text: "改为私密分享模式",
                score: 80,
                feedback: "有一定考虑，但还可以更好地沟通。"
            }
        ]
    },
    {
        id: 98,
        title: "休闲安排",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "周末丈夫想宅在家打游戏，你想出门活动。如何协调？",
        options: [
            {
                text: "自己出门玩，不管他",
                score: 40,
                feedback: "独自行动可能会增加感情距离。"
            },
            {
                text: "设计有趣的户外活动，让他也感兴趣",
                score: 95,
                feedback: "创意十足！用有趣的方式吸引他参与。"
            },
            {
                text: "各自安排一半时间，互不干涉",
                score: 75,
                feedback: "照顾双方需求，但可以有更好的互动。"
            }
        ]
    },
    {
        id: 99,
        title: "家庭投资",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想投资一个新兴的虚拟货币项目，你觉得风险太大。如何劝说？",
        options: [
            {
                text: "直接反对，说这是骗局",
                score: 40,
                feedback: "过于武断的态度可能会引起反感。"
            },
            {
                text: "一起研究项目资料，分析风险和收益",
                score: 95,
                feedback: "理性且专业的态度！共同分析更容易达成共识。"
            },
            {
                text: "建议先投资小额试试",
                score: 75,
                feedback: "谨慎的建议，但需要更全面的风险评估。"
            }
        ]
    },
    {
        id: 100,
        title: "长辈关系",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "公婆想把养老钱交给丈夫保管，但你担心会影响家庭开支。怎么办？",
        options: [
            {
                text: "拒绝接受，说现在压力太大",
                score: 30,
                feedback: "直接拒绝可能会伤害长辈感情。"
            },
            {
                text: "建议设立专门的养老账户，透明管理",
                score: 95,
                feedback: "专业且负责的做法！既尽孝心又确保资金安全。"
            },
            {
                text: "同意接受，但私下担心",
                score: 50,
                feedback: "被动接受可能会带来后续问题。"
            }
        ]
    },
    {
        id: 101,
        title: "职场发展",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫有机会升职，但需要经常出差。如何支持他的事业？",
        options: [
            {
                text: "反对他接受，要求以家庭为重",
                score: 30,
                feedback: "过于自我的要求会影响丈夫的事业发展。"
            },
            {
                text: "共同规划远程工作方案，保持密切联系",
                score: 95,
                feedback: "既支持事业又维护感情的明智之选！"
            },
            {
                text: "勉强同意，但提出补偿条件",
                score: 70,
                feedback: "条件交换的方式可能会影响感情。"
            }
        ]
    },
    {
        id: 102,
        title: "生活习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫总是忘记关灯关空调，导致电费很高。如何改变他的习惯？",
        options: [
            {
                text: "每次都生气指责他浪费",
                score: 30,
                feedback: "负面情绪只会适得其反。"
            },
            {
                text: "安装智能家居设备，让节能变得简单",
                score: 95,
                feedback: "聪明的解决方案！用科技手段改善生活。"
            },
            {
                text: "把电费单给他看，让他心疼",
                score: 60,
                feedback: "直观的提醒有帮助，但方式可以更温和。"
            }
        ]
    },
    {
        id: 103,
        title: "情感交流",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.HARD,
        description: "发现丈夫给你买了心仪已久的包包，但假货。如何回应？",
        options: [
            {
                text: "生气指责他不用心",
                score: 30,
                feedback: "忽视他的心意会伤害感情。"
            },
            {
                text: "感谢他的心意，委婉建议下次一起挑选",
                score: 95,
                feedback: "温柔体贴的回应！既保护了他的自尊心，又传达了正确的购物建议。"
            },
            {
                text: "默默收下，以后自己买",
                score: 60,
                feedback: "虽然避免了冲突，但没有建立有效沟通。"
            }
        ]
    },
    {
        id: 104,
        title: "亲子时间",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "孩子总是缠着爸爸玩手机游戏，你担心影响学习。如何处理？",
        options: [
            {
                text: "强制没收手机，禁止玩游戏",
                score: 30,
                feedback: "强制的方式会影响父子感情。"
            },
            {
                text: "引导他们玩益智类游戏，设定合理时间",
                score: 95,
                feedback: "智慧的引导！既保留了父子互动，又兼顾了教育意义。"
            },
            {
                text: "让爸爸陪孩子户外运动代替",
                score: 85,
                feedback: "转移注意力是个好方法，但要循序渐进。"
            }
        ]
    },
    {
        id: 105,
        title: "家庭决策",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫想给孩子买一个很贵的玩具，你觉得太娇惯。如何沟通？",
        options: [
            {
                text: "直接拒绝，说太浪费",
                score: 40,
                feedback: "简单的拒绝无法解决教育理念的分歧。"
            },
            {
                text: "设计任务奖励制度，让孩子通过努力获得",
                score: 95,
                feedback: "高明的教育方式！既满足愿望又培养好习惯。"
            },
            {
                text: "建议买个便宜的替代品",
                score: 70,
                feedback: "节约是好事，但要注意培养正确的价值观。"
            }
        ]
    },
    {
        id: 106,
        title: "社交礼仪",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.MEDIUM,
        description: "参加朋友聚会，丈夫的一些言论让场面很尴尬。如何化解？",
        options: [
            {
                text: "当场指出他的错误",
                score: 30,
                feedback: "公开指责会伤害丈夫的自尊心。"
            },
            {
                text: "巧妙转移话题，后续私下沟通",
                score: 95,
                feedback: "得体的处理方式！既维护了场面，又照顾了丈夫面子。"
            },
            {
                text: "装作没听见，继续其他话题",
                score: 70,
                feedback: "避免尴尬是对的，但需要后续引导。"
            }
        ]
    },
    {
        id: 107,
        title: "家庭旅行",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫想带父母一起去旅行，但你更希望二人世界。如何协调？",
        options: [
            {
                text: "直接拒绝，说想和他独处",
                score: 40,
                feedback: "过于直接的拒绝可能会伤害家庭关系。"
            },
            {
                text: "建议分两次旅行，既照顾父母又有二人时光",
                score: 95,
                feedback: "完美的平衡！既尽孝心又保持浪漫。"
            },
            {
                text: "勉强同意，但心情不好",
                score: 60,
                feedback: "被动接受可能会影响旅行的愉悦感。"
            }
        ]
    },
    {
        id: 108,
        title: "生活仪式",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "你想为结婚纪念日准备惊喜，但丈夫说不用太麻烦。怎么办？",
        options: [
            {
                text: "生气抱怨他不重视",
                score: 30,
                feedback: "负面情绪会破坏节日气氛。"
            },
            {
                text: "准备简单温馨的家庭晚餐，回顾甜蜜往事",
                score: 95,
                feedback: "温馨浪漫的安排！既不会太麻烦，又充满仪式感。"
            },
            {
                text: "约他出去吃饭，简单庆祝",
                score: 75,
                feedback: "基本的纪念方式，但可以更有创意。"
            }
        ]
    },
    {
        id: 109,
        title: "家庭聚会",
        category: CATEGORIES.SOCIAL,
        difficulty: DIFFICULTY.HARD,
        description: "婆婆在家庭聚会上说你不会持家，丈夫没有帮你说话。如何应对？",
        options: [
            {
                text: "当场反驳，指出婆婆的不是",
                score: 30,
                feedback: "公开对抗会让场面更加尴尬。"
            },
            {
                text: "优雅地展示自己的长处，化解尴尬",
                score: 95,
                feedback: "高情商的处理！用实际行动证明自己最有说服力。"
            },
            {
                text: "默默忍受，私下和丈夫抱怨",
                score: 60,
                feedback: "压抑情绪不是长久之计。"
            }
        ]
    },
    {
        id: 110,
        title: "个人空间",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫总是看你的手机，说这是关心你。如何维护隐私？",
        options: [
            {
                text: "生气指责他不信任你",
                score: 30,
                feedback: "激烈的反应会加深猜疑。"
            },
            {
                text: "和他沟通建立互信，同时保持适度透明",
                score: 95,
                feedback: "成熟的做法！既维护了隐私又不失信任。"
            },
            {
                text: "设置密码，拒绝他查看",
                score: 50,
                feedback: "简单的防范可能会引起更多怀疑。"
            }
        ]
    },
    {
        id: 111,
        title: "职场应酬",
        category: CATEGORIES.CAREER,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫应酬时有女同事频繁敬酒，你作为妻子陪同在场。如何处理？",
        options: [
            {
                text: "当场发脾气，指责女同事不懂规矩",
                score: 30,
                feedback: "失态的行为会影响丈夫的职场形象。"
            },
            {
                text: "优雅地介入互动，展现大方得体的一面",
                score: 95,
                feedback: "高情商的应对！既维护了场面，又展现了自信。"
            },
            {
                text: "默不作声，回家后发脾气",
                score: 50,
                feedback: "压抑情绪可能会影响夫妻关系。"
            }
        ]
    },
    {
        id: 112,
        title: "育儿观念",
        category: CATEGORIES.FAMILY,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫认为孩子学习成绩不好就该打骂，你不认同这种教育方式。如何沟通？",
        options: [
            {
                text: "直接指责他的教育方式落后",
                score: 30,
                feedback: "否定的态度会引起更大的分歧。"
            },
            {
                text: "分享科学的教育理念，共同探讨更好的方法",
                score: 95,
                feedback: "理性且专业的做法！用知识引导更容易被接受。"
            },
            {
                text: "暗中安慰孩子，不支持也不反对",
                score: 60,
                feedback: "消极的态度无法解决根本问题。"
            }
        ]
    },
    {
        id: 113,
        title: "生活习惯",
        category: CATEGORIES.DAILY,
        difficulty: DIFFICULTY.MEDIUM,
        description: "丈夫经常熬夜打游戏，第二天精神不好。如何帮他调整？",
        options: [
            {
                text: "趁他睡着偷偷删游戏",
                score: 30,
                feedback: "强制的方式会引起反感和不信任。"
            },
            {
                text: "创造温馨的睡前时光，让他自然放下手机",
                score: 95,
                feedback: "温柔的引导最容易被接受！"
            },
            {
                text: "不断唠叨熬夜的危害",
                score: 50,
                feedback: "过多的说教可能会适得其反。"
            }
        ]
    },
    {
        id: 114,
        title: "家庭开销",
        category: CATEGORIES.FINANCE,
        difficulty: DIFFICULTY.HARD,
        description: "丈夫觉得你网购太多，想管制你的花销。如何处理？",
        options: [
            {
                text: "反驳说这是自己赚的钱",
                score: 40,
                feedback: "对抗的态度不利于家庭和谐。"
            },
            {
                text: "一起制定家庭预算，合理规划开支",
                score: 95,
                feedback: "理性且负责的做法！共同管理更容易达成共识。"
            },
            {
                text: "答应少买，但偷偷继续",
                score: 30,
                feedback: "欺骗的行为会影响夫妻信任。"
            }
        ]
    }
];

// 游戏状态管理
class MarriageGame {
    constructor() {
        this.currentScenario = null;
        this.totalScore = 0;
        this.playedScenarios = new Set();
        this.consecutiveHighScores = 0;
        this.level = 1;
        this.specialAchievements = new Set();
        this.streakCount = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.categoryProgress = {
            [CATEGORIES.DAILY]: 0,
            [CATEGORIES.CAREER]: 0,
            [CATEGORIES.FAMILY]: 0,
            [CATEGORIES.FINANCE]: 0,
            [CATEGORIES.SOCIAL]: 0
        };
    }

    // 获取随机场景
    getRandomScenario() {
        // 根据当前等级筛选合适难度的场景
        const availableScenarios = gameScenarios.filter(s => {
            const notPlayed = !this.playedScenarios.has(s.id);
            const appropriateDifficulty = s.difficulty.level <= this.level;
            return notPlayed && appropriateDifficulty;
        });

        if (availableScenarios.length === 0) {
            this.playedScenarios.clear();
            this.level++;
            return gameScenarios.filter(s => s.difficulty.level <= this.level)[0];
        }

        return availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
    }

    // 开始新场景
    startNewScenario() {
        this.currentScenario = this.getRandomScenario();
        this.playedScenarios.add(this.currentScenario.id);
        
        return {
            ...this.currentScenario,
            level: this.level,
            totalPlayed: this.playedScenarios.size,
            categoryProgress: this.categoryProgress[this.currentScenario.category],
            combo: this.combo
        };
    }

    // 计算得分（考虑连击和难度系数）
    calculateScore(baseScore) {
        const comboBonus = Math.min(this.combo * 0.1, 0.5); // 最高50%连击加成
        const difficultyMultiplier = this.currentScenario.difficulty.multiplier;
        return Math.round(baseScore * (1 + comboBonus) * difficultyMultiplier);
    }

    // 选择选项并获取结果
    makeChoice(optionIndex) {
        if (!this.currentScenario) return null;
        
        const option = this.currentScenario.options[optionIndex];
        const adjustedScore = this.calculateScore(option.score);
        this.totalScore += adjustedScore;
        
        // 更新分类进度
        this.categoryProgress[this.currentScenario.category] += adjustedScore;

        // 计算连击
        if (option.score >= 85) {
            this.combo++;
            this.maxCombo = Math.max(this.maxCombo, this.combo);
            this.consecutiveHighScores++;
            this.streakCount++;
        } else {
            this.combo = 0;
            this.consecutiveHighScores = 0;
        }

        // 检查是否需要升级
        if (this.streakCount >= 5) {
            this.level++;
            this.streakCount = 0;
        }

        const achievements = this.checkSpecialAchievements(adjustedScore);
        
        return {
            baseScore: option.score,
            adjustedScore,
            feedback: option.feedback,
            totalScore: this.totalScore,
            consecutiveHighScores: this.consecutiveHighScores,
            level: this.level,
            achievement: this.getAchievement(adjustedScore),
            specialAchievements: achievements,
            streakCount: this.streakCount,
            combo: this.combo,
            maxCombo: this.maxCombo,
            difficulty: this.currentScenario.difficulty,
            category: this.currentScenario.category,
            categoryProgress: this.categoryProgress[this.currentScenario.category]
        };
    }

    // 获取特殊成就
    checkSpecialAchievements(score) {
        const achievements = [];
        
        if (score >= 95) {
            achievements.push({
                title: "完美驭术",
                description: "单次得分达到95分以上",
                icon: "👑"
            });
        }
        
        if (this.combo >= 5) {
            achievements.push({
                title: "连击大师",
                description: `达成${this.combo}连击！`,
                icon: "🔥"
            });
        }

        if (this.maxCombo >= 10) {
            achievements.push({
                title: "驭夫传说",
                description: "达成10连击",
                icon: "🏆"
            });
        }

        // 分类达人成就
        Object.entries(this.categoryProgress).forEach(([category, score]) => {
            if (score >= 500) {
                achievements.push({
                    title: `${category}达人`,
                    description: `在${category}分类中累计获得500分`,
                    icon: "⭐"
                });
            }
        });

        return achievements;
    }

    // 获取成就
    getAchievement(score) {
        const comboText = this.combo > 1 ? ` 🔥x${this.combo}` : '';
        if (score >= 95) return `完美驭夫！✨${comboText}`;
        if (score >= 85) return `驭夫高手！💫${comboText}`;
        if (score >= 75) return `驭夫达人！⭐${comboText}`;
        if (score >= 60) return `驭夫学徒 🌟`;
        return "继续加油 💪";
    }

    // 获取总体评价
    getFinalEvaluation() {
        const avgScore = this.totalScore / this.playedScenarios.size;
        if (avgScore >= 90) {
            return {
                title: "驭夫女王",
                message: "你已经掌握了高超的驭夫技巧，堪称驭夫界的女王！相信你的婚姻一定会幸福美满！",
                level: this.level
            };
        } else if (avgScore >= 80) {
            return {
                title: "驭夫达人",
                message: "你展现出了卓越的驭夫潜力，继续保持这份智慧，你离驭夫女王只差一步之遥！",
                level: this.level
            };
        } else if (avgScore >= 70) {
            return {
                title: "驭夫学徒",
                message: "你已经掌握了基本的驭夫技巧，继续学习和实践，你会成为一个出色的贤妻！",
                level: this.level
            };
        } else {
            return {
                title: "初学者",
                message: "婚姻需要智慧的经营，建议多看看专家的建议，提升驭夫技巧～",
                level: this.level
            };
        }
    }
}

// 导出游戏类
window.MarriageGame = MarriageGame; 