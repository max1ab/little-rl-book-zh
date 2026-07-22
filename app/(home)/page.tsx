import Link from "next/link";
import { chapters } from "@/app/lib/book";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-sm font-medium text-fd-muted-foreground">
          The Little Book of Reinforcement Learning · 中文社区译本
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-fd-foreground sm:text-6xl">
          强化学习小书
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground">
          从试错学习的基本直觉，到 PPO、RL × LLM 与 AlphaGo Zero。
          一份简短、连贯、面向实践的强化学习中文读本。
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/book/foreword"
            className="rounded-full bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            开始阅读
          </Link>
          <Link
            href="/book"
            className="rounded-full border border-fd-border bg-fd-secondary px-5 py-2.5 text-sm font-medium text-fd-secondary-foreground hover:bg-fd-accent"
          >
            浏览目录
          </Link>
        </div>
      </section>

      <section className="border-y border-fd-border bg-fd-muted/40">
        <div className="mx-auto grid w-full max-w-5xl gap-px border-x border-fd-border bg-fd-border md:grid-cols-2">
          {chapters.map((chapter) => (
            <article className="bg-fd-background p-7" key={chapter.number}>
              <p className="text-xs text-fd-muted-foreground">{chapter.part}</p>
              <h2 className="mt-2 text-lg font-semibold">
                {chapter.number}. {chapter.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                {chapter.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-fd-muted-foreground sm:flex-row sm:justify-between">
        <p>Alexandre Torres-Leguet 原著 · 中文社区译本</p>
        <p>CC BY-SA 4.0</p>
      </footer>
    </main>
  );
}
