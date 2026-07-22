import type { MDXComponents } from "mdx/types";
import { Callout } from "fumadocs-ui/components/callout";
import defaultMdxComponents from "fumadocs-ui/mdx";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Callout,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
