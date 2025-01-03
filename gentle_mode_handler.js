class GentleModeHandler {
    constructor() {
        // 确保配置存在
        if (!window.GENTLE_MODE_CONFIG) {
            console.error('温柔模式配置未找到');
            this.config = {
                welcomeMessage: '温柔模式初始化失败，请刷新页面重试。',
                systemPrompt: ''
            };
        } else {
            this.config = window.GENTLE_MODE_CONFIG;
        }
        
        this.isGentleMode = false;
        this.currentTopic = '';
        this.conversationPhase = 0;
    }

    // 切换温柔模式
    toggleGentleMode() {
        this.isGentleMode = !this.isGentleMode;
        if (this.isGentleMode) {
            return {
                message: this.config.welcomeMessage,
                isGentleMode: true
            };
        } else {
            this.resetState();
            return {
                message: '已退出温柔模式。期待下次为您提供温柔的建议。',
                isGentleMode: false
            };
        }
    }

    // 生成温柔模式的提示词
    generatePrompt(userInput) {
        if (!this.currentTopic) {
            this.currentTopic = userInput;
        }

        return `${this.config.systemPrompt}

基于小姐妹的分享："${userInput}"
当前话题："${this.currentTopic}"

请从以下角度进行温柔分析和建议：

1. 情感共鸣：
   - 理解和接纳当下的情绪
   - 找到情绪背后的需求
   - 给予温暖的情感支持
   - 分享理解和认同
   - 传递积极的能量

2. 问题分析：
   - 识别核心诉求
   - 发现潜在机会
   - 分析可改进点
   - 寻找积极因素
   - 预测发展趋势

3. 实用建议：
   - 具体可行的方法
   - 循序渐进的步骤
   - 注意事项提醒
   - 可能遇到的困难
   - 应对策略准备

4. 关系维护：
   - 维系感情的技巧
   - 增进感情的方法
   - 创造甜蜜时刻
   - 处理分歧方式
   - 经营未来规划

5. 自我提升：
   - 个人魅力培养
   - 情商技巧提升
   - 心态调整建议
   - 能力成长方向
   - 生活品质改善

请提供：
【温柔理解】：以感同身受的方式理解她的感受，给予情感上的支持和认同
【问题分析】：温和地分析当前状况，找出积极因素和可改进点
【具体建议】：提供3-5个具体可行的温柔策略，每个策略都要有详细的操作步骤
【实施指导】：说明如何循序渐进地实施这些建议，包括可能遇到的困难和应对方法
【美好愿景】：展望实施建议后的美好改变，给予温暖的鼓励和祝福`;
    }

    // 生成总结提示词
    generateSummaryPrompt() {
        return `亲爱的小姐妹，让我们对我们的温柔对话进行一个暖心的总结：

1. 情感梳理：
   - 理解的感受和情绪
   - 内心的真实需求
   - 情感的温柔安抚
   - 心灵的共鸣与支持
   - 积极的情绪引导

2. 问题洞察：
   - 核心诉求分析
   - 现状评估结果
   - 积极因素发现
   - 改进空间识别
   - 发展趋势预测

3. 解决方案：
   - 温柔的处理方式
   - 具体的操作步骤
   - 注意事项提醒
   - 困难应对策略
   - 效果评估方法

4. 关系提升：
   - 感情维系技巧
   - 甜蜜互动建议
   - 矛盾处理方法
   - 沟通改善建议
   - 未来发展规划

5. 个人成长：
   - 魅力提升方向
   - 能力培养建议
   - 心态调整方法
   - 生活品质改善
   - 自我提升计划

请提供：
【温柔总结】：体贴地总结核心问题和情感需求
【实用建议】：提供具体可行的解决方案，包括详细步骤
【执行计划】：制定循序渐进的实施计划，包括时间节点
【注意要点】：提醒需要关注的细节和可能的困难
【应对策略】：分享如何处理可能遇到的挑战
【美好期待】：展望实施后的美好改变
【暖心鼓励】：送上温暖的祝福和鼓励`;
    }

    // 处理用户输入
    async handleUserInput(userInput, callDeepseekAPI) {
        if (!this.isGentleMode) {
            return null;
        }

        try {
            let prompt = this.generatePrompt(userInput);
            
            // 对话阶段推进
            this.conversationPhase++;
            
            // 如果达到总结阶段
            if (this.conversationPhase >= 3) {
                prompt = this.generateSummaryPrompt();
                // 重置状态
                this.resetState();
            }

            return await callDeepseekAPI(prompt);
        } catch (error) {
            console.error('温柔模式处理错误:', error);
            return '抱歉，我现在有点困扰，让我们稍后继续我们温柔的对话...';
        }
    }

    // 重置状态
    resetState() {
        this.conversationPhase = 0;
        this.currentTopic = '';
    }
}

// 将类设为全局变量
window.GentleModeHandler = GentleModeHandler; 