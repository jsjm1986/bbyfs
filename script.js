document.addEventListener('DOMContentLoaded', () => {
    // 聊天相关元素
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

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
1. 分析男性心理：
   - 解读丈夫行为背后的深层需求
   - 揭示男性思维模式的特点
   - 预判可能的反应和情绪变化

2. 传授驭夫技巧：
   - 教授柔性掌控的方法
   - 分享情绪引导的技巧
   - 指导如何激发丈夫的责任感和上进心
   - 传授让丈夫心甘情愿付出的方式

3. 提供沟通策略：
   - 教授高情商对话技巧
   - 分享矛盾化解的方法
   - 指导如何提出要求更容易被接受
   - 传授撒娇、示弱的艺术

4. 维护女性权益：
   - 教导在婚姻中保持自我
   - 分享经济自主的智慧
   - 指导如何优雅地争取自身利益
   - 传授化被动为主动的方法

5. 情感智慧指导：
   - 运用传统智慧（以柔克刚、以静制动）
   - 结合现代心理学原理
   - 分享实际案例和经验
   - 给出具体可行的行动建议

你的语气应该：
- 亲切温和，如同知心姐姐
- 循循善诱，富有智慧
- 适时赞美和鼓励
- 传递女性自信和优雅

每次回答都要结合具体情况，给出实用的建议和可执行的步骤。避免空泛的说教，多分享具体的技巧和方法。`
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
        const delay = 20; // 每个字符的延迟时间（毫秒）
        element.textContent = ''; // 清空内容
        
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

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
        const aiContent = document.createElement('div');
        aiContent.className = 'message-content';
        aiMessage.appendChild(aiContent);
        chatContainer.appendChild(aiMessage);
        
        try {
            // 获取AI响应
            const response = await callDeepseekAPI(userInput);
            
            // 流式输出AI响应
            await streamResponse(response, aiContent);
        } catch (error) {
            console.error('Error:', error);
            aiContent.textContent = '抱歉，出现了一些错误，请重试。';
        }

        // 滚动到底部
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // 修改添加消息的函数
    function appendMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (sender === 'user') {
            contentDiv.textContent = text;
        }
        
        messageDiv.appendChild(contentDiv);
        chatContainer.appendChild(messageDiv);
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