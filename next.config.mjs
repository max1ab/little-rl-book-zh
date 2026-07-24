import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/little-rl-book-zh" : "";

/** @type {import('next').NextConfig} */
const config = {
  output: isGitHubPages ? "export" : undefined,
  basePath,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
};

export default withMDX(config);
