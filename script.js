document.addEventListener('DOMContentLoaded', () => {
    // 确保配置已加载
    if (!window.GENTLE_MODE_CONFIG) {
        console.error('温柔模式配置未加载，请检查 gentle_mode.js');
        return;
    }

    // 聊天相关元素
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const deepModeBtn = document.getElementById('deepModeBtn');
    const gentleModeBtn = document.getElementById('gentleModeBtn');

    // 创建深入模式状态指示器
    const deepModeIndicator = document.createElement('div');
    deepModeIndicator.className = 'deep-mode-indicator';
    deepModeIndicator.innerHTML = '<i class="fas fa-brain"></i> 深入对话模式';
    chatContainer.appendChild(deepModeIndicator);

    // 创建温柔模式状态指示器
    const gentleModeIndicator = document.createElement('div');
    gentleModeIndicator.className = 'gentle-mode-indicator';
    gentleModeIndicator.innerHTML = '<i class="fas fa-heart"></i> 温柔对话模式';
    chatContainer.appendChild(gentleModeIndicator);

    // 初始化温柔模式处理器
    const gentleModeHandler = new GentleModeHandler();

    // 深入模式状态
    let isDeepMode = false;
    let currentTopic = '';
    let questionPhase = 0;

    // 深入模式问题模板
    const deepQuestions = {
        initial: [
            "能详细描述一下这个问题是什么时候开始的吗？",
            "这个情况让你感受到了什么样的情绪？",
            "你觉得这个问题的根源可能是什么？"
        ],
        emotional: [
            "这种感受让你想起了什么过往的经历吗？",
            "在你的原生家庭中，是否有类似的情感模式？",
            "你期待中的理想状态是什么样的？"
        ],
        behavioral: [
            "在这种情况下，你通常会如何反应？",
            "这种行为模式在其他关系中是否也存在？",
            "你觉得这种反应方式的效果如何？"
        ],
        cognitive: [
            "你对这个情况的理解是什么？",
            "你认为对方是如何看待这个问题的？",
            "有没有其他可能的解释角度？"
        ]
    };

    // 修改添加消息的函数
    function appendMessage(sender, text, isDeepMode = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        if (sender === 'ai' && isDeepMode) {
            messageDiv.classList.add('deep-mode-message');
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (sender === 'user') {
            contentDiv.textContent = text;
        } else {
            // 如果是AI消息，支持emoji和格式化
            contentDiv.innerHTML = text.replace(/\n/g, '<br>')
                                     .replace(/【([^】]+)】/g, '<strong style="color: #4a90e2">【$1】</strong>')
                                     .replace(/•/g, '<span style="color: #666">•</span>');
        }
        
        messageDiv.appendChild(contentDiv);
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 深入模式按钮点击事件
    deepModeBtn.addEventListener('click', () => {
        // 如果温柔模式是开启的，先关闭它
        if (gentleModeHandler.isGentleMode) {
            const result = gentleModeHandler.toggleGentleMode();
            gentleModeBtn.classList.remove('active');
            gentleModeIndicator.classList.remove('active');
        }

        isDeepMode = !isDeepMode;
        deepModeBtn.classList.toggle('active');
        deepModeIndicator.classList.toggle('active');
        
        if (isDeepMode) {
            appendMessage('ai', `🧠 已进入深入对话模式

我是您的专业婚恋心理咨询师。在这个模式下，我将通过系统性的提问和分析，帮助您更深入地理解和解决问题。

【分析维度】
1️⃣ 情感探索
   • 识别核心情绪和需求
   • 分析情感反应模式
   • 探索情绪触发点

2️⃣ 认知解析
   • 发现思维模式和信念
   • 识别潜在认知偏差
   • 探讨问题归因方式

3️⃣ 行为观察
   • 分析行为模式和效果
   • 理解行为背后的动机
   • 评估应对策略的有效性

4️⃣ 关系动力
   • 探索互动循环模式
   • 分析权力和边界议题
   • 评估亲密关系需求

5️⃣ 原生家庭影响
   • 探索家庭互动模式
   • 分析代际传递影响
   • 识别家庭价值观

【对话流程】
1. 您分享困扰的问题
2. 我进行专业分析和提问
3. 通过3-5轮深入对话
4. 最后给出系统性建议

现在，请告诉我您想探讨的问题。我会用专业的视角，帮助您更好地理解和解决它。`, true);
        } else {
            appendMessage('ai', '已退出深入模式。我们继续轻松对话，随时欢迎您重新进入深入模式。');
            // 重置状态
            questionPhase = 0;
            currentTopic = '';
            deepModeIndicator.classList.remove('active');
        }
    });

    // 游戏相关元素
    const chatMode = document.getElementById('chatMode');
    const gameMode = document.getElementById('gameMode');
    const chatSection = document.getElementById('chatSection');
    const gameSection = document.getElementById('gameSection');
    const startGameBtn = document.getElementById('startGameBtn');
    const scenarioTitle = document.getElementById('scenarioTitle');
    const scenarioDescription = document.getElementById('scenarioDescription');
    const optionsContainer = document.getElementById('optionsContainer');
    const gameResult = document.getElementById('gameResult');
    const scoreFeedback = document.getElementById('scoreFeedback');
    const totalScore = document.getElementById('totalScore');

    // 初始化游戏
    const game = new MarriageGame();

    // 模式切换
    chatMode.addEventListener('click', () => {
        chatMode.classList.add('active');
        gameMode.classList.remove('active');
        chatSection.classList.add('active');
        gameSection.classList.remove('active');
    });

    gameMode.addEventListener('click', () => {
        gameMode.classList.add('active');
        chatMode.classList.remove('active');
        gameSection.classList.add('active');
        chatSection.classList.remove('active');
    });

    // 游戏控制
    function displayScenario(scenario) {
        // 清除之前的进度信息
        const existingProgress = document.querySelector('.progress-info');
        if (existingProgress) {
            existingProgress.remove();
        }

        scenarioTitle.textContent = `第${scenario.level}关：${scenario.title}`;
        scenarioDescription.textContent = scenario.description;
        
        // 添加场景信息
        const scenarioInfo = document.createElement('div');
        scenarioInfo.className = 'scenario-info';
        scenarioInfo.innerHTML = `
            <div class="scenario-category">
                <i class="fas fa-tag"></i>
                <span>${scenario.category}</span>
            </div>
            <div class="scenario-difficulty">
                <i class="fas fa-signal"></i>
                <span>难度：${scenario.difficulty.name}</span>
            </div>
        `;
        scenarioTitle.after(scenarioInfo);
        
        // 添加进度显示
        const progress = document.createElement('div');
        progress.className = 'progress-info';
        progress.innerHTML = `
            <div class="level-info">
                <span class="level">Level ${scenario.level}</span>
                <div class="streak-meter">
                    <div class="streak-progress" style="width: ${(game.streakCount / 5) * 100}%"></div>
                </div>
            </div>
            <div class="combo-info">
                ${scenario.combo > 0 ? `<span class="combo">连击 x${scenario.combo} 🔥</span>` : ''}
            </div>
            <span class="progress">已完成 ${scenario.totalPlayed} 题</span>
        `;
        scenarioInfo.after(progress);

        // 清除之前的选项
        optionsContainer.innerHTML = '';
        
        // 添加新选项
        scenario.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `
                <span class="option-number">${index + 1}</span>
                <div class="option-content">
                    <span class="option-text">${option.text}</span>
                </div>
            `;
            button.addEventListener('click', () => makeChoice(index));
            optionsContainer.appendChild(button);
        });

        // 重置结果显示
        gameResult.style.display = 'none';
        gameResult.innerHTML = '';
        startGameBtn.style.display = 'none';
    }

    function makeChoice(optionIndex) {
        const result = game.makeChoice(optionIndex);
        const options = optionsContainer.getElementsByClassName('option-btn');
        
        // 禁用所有选项
        Array.from(options).forEach(opt => {
            opt.disabled = true;
            opt.style.cursor = 'default';
        });
        
        // 高亮选中的选项
        options[optionIndex].classList.add('selected');

        // 显示结果
        gameResult.style.display = 'block';
        gameResult.innerHTML = `
            <div class="result-header">
                <span class="achievement">${result.achievement}</span>
                <div class="score-info">
                    <span class="base-score">基础分：${result.baseScore}</span>
                    ${result.combo > 1 ? `<span class="combo-bonus">连击加成：x${(1 + Math.min(result.combo * 0.1, 0.5)).toFixed(1)}</span>` : ''}
                    ${result.difficulty.multiplier > 1 ? `<span class="difficulty-bonus">难度加成：x${result.difficulty.multiplier}</span>` : ''}
                    <span class="final-score">最终得分：${result.adjustedScore}</span>
                </div>
            </div>
            <p class="feedback">${game.currentScenario.options[optionIndex].feedback}</p>
            <div class="stats">
                <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>总分：${result.totalScore}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-fire"></i>
                    <span>当前连击：${result.combo}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-trophy"></i>
                    <span>最高连击：${result.maxCombo}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-crown"></i>
                    <span>当前等级：${result.level}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-chart-line"></i>
                    <span>升级进度：${result.streakCount}/5</span>
                </div>
            </div>
            <div class="category-progress">
                <h4>${result.category}分类进度</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${Math.min(result.categoryProgress / 500 * 100, 100)}%"></div>
                </div>
                <span class="progress-text">${result.categoryProgress}/500</span>
            </div>
        `;

        // 显示特殊成就
        if (result.specialAchievements && result.specialAchievements.length > 0) {
            const achievementsDiv = document.createElement('div');
            achievementsDiv.className = 'achievements-container';
            achievementsDiv.innerHTML = `
                <h3>🎉 解锁新成就！</h3>
                <div class="achievements-list">
                    ${result.specialAchievements.map(achievement => `
                        <div class="achievement-item">
                            <span class="achievement-icon">${achievement.icon}</span>
                            <div class="achievement-details">
                                <span class="achievement-title">${achievement.title}</span>
                                <span class="achievement-description">${achievement.description}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            gameResult.appendChild(achievementsDiv);
        }

        // 检查是否升级
        if (result.streakCount === 0 && result.level > game.level - 1) {
            const levelUpDiv = document.createElement('div');
            levelUpDiv.className = 'level-up-animation';
            levelUpDiv.innerHTML = `
                <div class="level-up-content">
                    <span class="level-up-icon">🎊</span>
                    <h3>升级啦！</h3>
                    <p>恭喜达到 Level ${result.level}</p>
                    <p class="level-up-bonus">解锁新难度：${DIFFICULTY[Object.keys(DIFFICULTY)[result.level - 1]].name}</p>
                    <button class="close-level-up">继续游戏</button>
                </div>
            `;
            document.body.appendChild(levelUpDiv);

            // 添加关闭按钮事件监听
            const closeButton = levelUpDiv.querySelector('.close-level-up');
            closeButton.addEventListener('click', () => {
                levelUpDiv.remove();
                // 显示继续游戏按钮
                startGameBtn.textContent = '继续下一题';
                startGameBtn.style.display = 'inline-block';
            });
        } else {
            // 如果没有升级，直接显示继续按钮
            setTimeout(() => {
                startGameBtn.textContent = '继续下一题';
                startGameBtn.style.display = 'inline-block';
            }, 1500);
        }
    }

    startGameBtn.addEventListener('click', () => {
        const scenario = game.startNewScenario();
        displayScenario(scenario);
    });

    // 聊天功能
    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        messageDiv.textContent = content;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    async function callDeepseekAPI(userMessage) {
        try {
            const response = await fetch(CONFIG.API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model: CONFIG.MODEL,
                    messages: [
                        {
                            role: "system",
                            content: `你是一位德高望重的女性情感导师，精通驭夫之术与婚姻智慧。你集传统智慧与现代心理学于一身，擅长帮助女性解决婚姻困扰。

作为回答时，你应该：
1. 深入的心理分析：
   - 运用依恋理论解读伴侣关系模式
   - 分析双方的原生家庭对关系的影响
   - 识别并解释潜意识的防御机制
   - 运用交易分析理论解读互动模式
   - 评估双方的情感需求和表达方式

2. 分析男性心理：
   - 解读丈夫行为背后的深层需求和童年创伤
   - 揭示男性思维模式的特点和心理防线
   - 分析男性的自尊需求和面子心理
   - 解读男性的依恋风格和情感表达方式
   - 评估压力、焦虑对男性行为的影响

3. 婚姻动力分析：
   - 评估婚姻关系中的权力动态
   - 分析双方的付出与回报平衡
   - 识别互动中的恶性循环模式
   - 解读双方的沟通障碍成因
   - 分析婚姻关系中的边界问题

4. 传授驭夫技巧：
   - 基于心理学原理的柔性掌控方法
   - 运用积极强化理论的奖励机制
   - 通过移情理解建立情感连接
   - 运用认知重构改善关系认知
   - 教授情绪调节和压力管理技巧

5. 提供沟通策略：
   - 运用同理心倾听技术
   - 教授"我信息"表达方式
   - 分享非暴力沟通原则
   - 指导如何进行有效的情感验证
   - 传授冲突降级的对话技巧

6. 维护女性心理健康：
   - 指导建立健康的自我认知
   - 教授情绪边界管理方法
   - 提供自我关爱和成长建议
   - 帮助建立支持系统网络
   - 关注创伤修复和自我疗愈

你的回答应该：
- 结合心理学理论进行专业分析
- 给出具体可行的行动建议
- 注重双方的情感需求平衡
- 关注长期关系的可持续发展
- 保持温和而专业的语气

每次回答要：
1. 先做深入的心理分析
2. 解释行为背后的动机和需求
3. 提供基于心理学的解决方案
4. 给出具体的执行步骤
5. 预测可能的阻碍和应对方法`
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ]
                })
            });

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('API调用错误:', error);
            return '抱歉,服务器出现了问题,请稍后再试。';
        }
    }

    // 添加流式输出功能
    async function streamResponse(text, element) {
        if (!text || typeof text !== 'string') {
            console.error('无效的响应文本:', text);
            element.textContent = '抱歉，出现了一些错误，请重试。';
            return;
        }

        const delay = 20; // 每个字符的延迟时间（毫秒）
        element.textContent = ''; // 清空内容
        
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    // 温柔模式按钮点击事件
    gentleModeBtn.addEventListener('click', () => {
        // 如果深入模式是开启的，先关闭它
        if (isDeepMode) {
            isDeepMode = false;
            deepModeBtn.classList.remove('active');
            deepModeIndicator.classList.remove('active');
            questionPhase = 0;
            currentTopic = '';
        }

        const result = gentleModeHandler.toggleGentleMode();
        gentleModeBtn.classList.toggle('active');
        gentleModeIndicator.classList.toggle('active');
        
        if (result.isGentleMode) {
            appendMessage('ai', result.message, false, true);
        } else {
            appendMessage('ai', result.message);
        }
    });

    // 修改发送消息的函数
    async function sendMessage() {
        const userInput = document.getElementById('userInput').value.trim();
        if (!userInput) return;

        // 添加用户消息
        appendMessage('user', userInput);
        document.getElementById('userInput').value = '';

        // 显示AI正在输入的状态
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message ai-message';
        if (gentleModeHandler.isGentleMode) {
            aiMessage.classList.add('gentle-mode-message');
        } else if (isDeepMode) {
            aiMessage.classList.add('deep-mode-message');
        }
        
        const aiContent = document.createElement('div');
        aiContent.className = 'message-content';
        aiMessage.appendChild(aiContent);
        chatContainer.appendChild(aiMessage);

        try {
            let response;
            
            // 处理温柔模式
            if (gentleModeHandler.isGentleMode) {
                response = await gentleModeHandler.handleUserInput(userInput, callDeepseekAPI);
            } 
            // 处理深入模式
            else if (isDeepMode) {
                // 在深入模式下，根据当前阶段构建特定的提示词
                if (!currentTopic) {
                    currentTopic = userInput;
                }
                const prompt = `作为一位专业的婚姻心理咨询师，基于用户的回答："${userInput}"，以及当前话题："${currentTopic}"，
                         请从以下维度进行深入分析和提问：

1. 情感分析维度：
   - 探索情绪的根源和触发点
   - 分析情感反应模式和强度
   - 识别潜在的情感需求
   - 评估情感依恋类型
   - 探讨情感表达方式

2. 认知分析维度：
   - 识别核心信念和思维模式
   - 发现可能的认知偏差
   - 分析问题归因方式
   - 评估期望和标准的合理性
   - 探索解决问题的思维框架

3. 行为分析维度：
   - 观察行为反应模式
   - 分析行为的功能性
   - 评估行为的适应性
   - 探索行为背后的动机
   - 识别行为的强化因素

4. 关系动力维度：
   - 分析权力和控制模式
   - 评估亲密关系的边界
   - 探索沟通方式的效能
   - 识别互动中的循环模式
   - 分析依恋需求的满足状况

5. 原生家庭维度：
   - 探索家庭互动模式的代际传递
   - 分析原生家庭的影响
   - 识别家庭规则和价值观
   - 评估家庭角色的影响
   - 探讨家庭创伤的影响

请基于以上维度：
1. 给出专业的心理分析，解释用户回答中反映的核心议题
2. 选择最相关的维度，提出一个深入的追问
3. 说明这个追问如何帮助理解用户的核心问题

回答格式：
【分析】：专业的心理分析
【追问】：深入的问题
【说明】：问题的意义和目的`;

                response = await callDeepseekAPI(prompt);
                
                // 推进对话阶段
                questionPhase++;
                
                // 如果达到总结阶段
                if (questionPhase >= 3) {
                    const summaryPrompt = `作为专业的婚姻心理咨询师，请基于之前的对话内容，从以下维度进行系统性总结和建议：

1. 核心问题分析：
   - 情感层面的核心议题
   - 认知层面的关键模式
   - 行为层面的主要特征
   - 关系动力的核心特点
   - 原生家庭的影响要素

2. 问题的形成与维持：
   - 问题的发展历程
   - 维持问题的因素
   - 尝试过的解决方案
   - 解决方案的效果
   - 阻碍改变的因素

3. 改善建议：
   - 情感调节策略
   - 认知重构方法
   - 行为改变技巧
   - 关系互动建议
   - 自我成长方向

4. 具体执行步骤：
   - 短期改善目标
   - 中期发展方向
   - 长期成长规划
   - 可能遇到的困难
   - 应对困难的策略

请提供：
【问题总结】：系统性分析问题的本质
【改善建议】：具体可行的改善方案
【执行步骤】：清晰的行动指南
【注意事项】：需要关注的要点`;

                    const summary = await callDeepseekAPI(summaryPrompt);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    appendMessage('ai', '让我们来总结一下我们的探讨：');
                    const summaryMessage = document.createElement('div');
                    summaryMessage.className = 'message ai-message summary';
                    const summaryContent = document.createElement('div');
                    summaryContent.className = 'message-content';
                    summaryMessage.appendChild(summaryContent);
                    chatContainer.appendChild(summaryMessage);
                    await streamResponse(summary, summaryContent);
                    
                    // 重置深入模式状态
                    questionPhase = 0;
                    currentTopic = '';
                    isDeepMode = false;
                    deepModeBtn.classList.remove('active');
                    deepModeIndicator.classList.remove('active');
                    return;
                }
            } 
            // 普通模式
            else {
                response = await callDeepseekAPI(userInput);
            }
            
            // 流式输出AI响应
            if (response) {
                await streamResponse(response, aiContent);
            } else {
                aiContent.textContent = '抱歉，未能获取到有效响应，请重试。';
            }

        } catch (error) {
            console.error('Error:', error);
            aiContent.textContent = '抱歉，出现了一些错误，请重试。';
        }

        // 滚动到底部
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 事件监听
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 初始欢迎消息
    addMessage('亲爱的姐妹，我是您的驭夫顾问。作为一位感情智者，我很高兴能为您解答婚姻困惑，教您如何更好地经营婚姻。请告诉我您的困扰，我会为您提供专业的建议。如何让爱情之花常开不败。请告诉我您的困扰，让我为您指点迷津。');
}); 