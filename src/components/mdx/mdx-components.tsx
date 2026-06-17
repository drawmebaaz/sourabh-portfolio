import Link from "next/link";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import { Callout } from "@/components/mdx/callout";
import { CodeBlock } from "@/components/mdx/code-block";
import { slugify } from "@/lib/utils";

export const mdxComponents = {
  Callout,
  CodeBlock,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(props.children));
    return <h2 id={id} {...props} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(props.children));
    return <h3 id={id} {...props} />;
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href ?? "#";
    if (href.startsWith("/")) {
      return <Link href={href}>{props.children}</Link>;
    }
    return <a {...props} target="_blank" rel="noreferrer" />;
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
    const child = props.children;

    if (isValidElement(child)) {
      const childProps = child.props as {
        className?: string;
        children?: ReactNode;
      };
      const language =
        childProps.className?.replace("language-", "") || "text";

      return (
        <CodeBlock language={language}>
          {String(childProps.children ?? "")}
        </CodeBlock>
      );
    }

    return <pre {...props} />;
  },
};
