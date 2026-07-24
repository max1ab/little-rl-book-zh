import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "强化学习小书",
    },
    links: [
      { text: "目录", url: "/book" },
      { text: "术语表", url: "/book/glossary" },
      { text: "关于译本", url: "/book/about" },
    ],
    githubUrl: "https://github.com/max1ab/little-rl-book-zh",
  };
}
