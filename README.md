# 强化学习小书 · 中文社区译本

《[The Little Book of Reinforcement Learning](https://github.com/alxndrTL/little-book-rl)》的中文翻译与在线阅读版本。

原著：Alexandre Torres-Leguet。原作与本译本依据 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可发布。

## 本地运行

需要 Node.js `>=22.13.0`：

```bash
npm install
npm run dev
```

访问终端显示的本地地址。生产构建与测试：

```bash
npm test
```

## 技术栈

- Next.js 16
- Fumadocs UI、Core 与 MDX
- Tailwind CSS 4
- KaTeX（通过 `remark-math` 和 `rehype-katex`）
- Fumadocs 内置全文搜索

## 内容结构

- `app/page.tsx`：在线书首页
- `content/docs/`：所有书籍正文，每页一个 Markdown/MDX 文件
- `content/docs/meta.json`：章节顺序、分部和侧栏结构
- `app/book/[[...slug]]/`：Fumadocs 通用正文路由
- `app/book/layout.tsx`：Fumadocs 阅读布局
- `components/mdx.tsx`：中文在线书可用的 MDX 组件
- `source.config.ts`：内容集合、数学公式插件配置
- `lib/source.ts`：内容加载与路由
- `app/lib/book.ts`：章节元数据与导航
- `TRANSLATION.md`：翻译约定与进度

新增章节时，只需在 `content/docs/` 中添加 `.mdx` 文件，并在 `meta.json` 中加入文件名。

## 当前进度

- [x] 中文阅读界面与移动端布局
- [x] 全书目录和章节占位
- [x] KaTeX 数学公式支持
- [x] 前言初译
- [x] 第一章 1.1、1.2 初译与排版示例
- [ ] 第一章剩余小节
- [ ] 第二至第六章
- [ ] 全书术语和公式终校

## 许可证

这是原作的中文翻译和网页重排版本。转载或修改时必须：

1. 注明原作者 Alexandre Torres-Leguet 和原作链接；
2. 注明使用了中文翻译和网页重排版本；
3. 标明你所作的进一步修改；
4. 继续以 CC BY-SA 4.0 许可分享。
