# 翻译约定

## 原则

1. 技术含义优先于逐字对应，同时保留原书简短、口语化的叙事风格。
2. 首次出现的重要术语采用“中文（English）”，后续使用中文。
3. 算法名和常用缩写保留英文，例如 SARSA、PPO、GRPO、RLHF。
4. 数学符号、下标、期望算子及概率分布必须与原书逐项核对。
5. 图题使用“图 1.1”格式；引用保留原作者与年份。
6. 任何补充解释都明确标成“译注”，不混入原文。

## 核心术语

| 英文 | 统一译法 | 备注 |
| --- | --- | --- |
| agent | 智能体 | 不使用“代理” |
| environment | 环境 |  |
| state | 状态 |  |
| observation | 观测 | 与 state 区分 |
| action | 动作 |  |
| reward | 奖励 | 单步反馈 |
| return | 回报 | 累积未来奖励 |
| policy | 策略 |  |
| value function | 价值函数 |  |
| trajectory | 轨迹 |  |
| episode | 回合 |  |
| rollout | 轨迹采样 | 视语境可简写为 rollout |
| credit assignment | 信用分配 |  |
| on-policy | 同策略 | 首次出现附英文 |
| off-policy | 异策略 | 首次出现附英文 |
| temporal difference | 时序差分 | 简写 TD |
| advantage | 优势函数 |  |
| Markov property | 马尔可夫性质 |  |
| Markov Decision Process | 马尔可夫决策过程 | 简写 MDP |
| transition function | 转移函数 |  |
| training loop | 训练循环 | 与交互循环区分 |
| reward hacking | 奖励黑客 | 首次出现附英文 |
| exploration | 探索 |  |
| exploitation | 利用 |  |

## 校对清单

- 逐段核对是否遗漏否定、程度词与条件限定。
- 逐个核对公式编号、变量下标、求和范围和期望分布。
- 检查术语是否与本文件及网站术语表一致。
- 检查章节锚点、上一节/下一节链接和本页目录。
- 在桌面和窄屏下检查公式、表格、图示是否溢出。
- 每章末尾记录原 PDF 页码范围和校对状态。

## 进度状态

正文页面使用以下状态：

- `初译`：完成第一轮翻译，尚未技术校对。
- `技术校对`：公式、术语和引用已核对。
- `终校`：语言和网页排版已复核，可以发布。
