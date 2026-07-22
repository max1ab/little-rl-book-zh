export const chapters = [
  {
    number: 1,
    part: "第一部分 · 基础",
    title: "强化学习究竟是什么？",
    summary: "交互循环、马尔可夫性质与信用分配。",
  },
  {
    number: 2,
    part: "第一部分 · 基础",
    title: "强化学习如何实现？",
    summary: "策略、模型、价值，以及它们的常见组合。",
  },
  {
    number: 3,
    part: "第二部分 · 深入",
    title: "价值函数",
    summary: "从动态规划、蒙特卡洛到 SARSA 与 Q-learning。",
  },
  {
    number: 4,
    part: "第二部分 · 深入",
    title: "策略优化方法",
    summary: "策略梯度、GAE、信赖域方法与 PPO。",
  },
  {
    number: 5,
    part: "第三部分 · 规模化",
    title: "RL × LLM",
    summary: "从 PPO、GRPO 到大模型强化学习基础设施。",
  },
  {
    number: 6,
    part: "第三部分 · 规模化",
    title: "AlphaGo Zero",
    summary: "改进、评估、自我对弈与完整训练闭环。",
  },
] as const;

export const bookNavigation = [
  {
    part: "开始",
    items: [
      { href: "/book/foreword", label: "前言", ready: true },
      { href: "/book", label: "全书目录", ready: true },
    ],
  },
  {
    part: "第一部分 · 基础",
    items: [
      { href: "/book/chapter-1", label: "1  强化学习究竟是什么？", ready: true },
      { href: "/book#chapter-2", label: "2  强化学习如何实现？", ready: false },
      { href: "/book#practical-notes", label: "实践笔记", ready: false },
    ],
  },
  {
    part: "第二部分 · 深入",
    items: [
      { href: "/book#chapter-3", label: "3  价值函数", ready: false },
      { href: "/book#chapter-4", label: "4  策略优化方法", ready: false },
    ],
  },
  {
    part: "第三部分 · 规模化",
    items: [
      { href: "/book#chapter-5", label: "5  RL × LLM", ready: false },
      { href: "/book#chapter-6", label: "6  AlphaGo Zero", ready: false },
    ],
  },
  {
    part: "附录",
    items: [
      { href: "/glossary", label: "中英文术语表", ready: true },
      { href: "/about", label: "翻译与版权说明", ready: true },
    ],
  },
] as const;
