import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

import { PostMeta } from "@/types";
import * as PostComponents from "@/components/PostComponents";

const PostLayout: React.FC<{ meta: PostMeta; children?: any }> = ({
  meta,
  children,
  ...rest
}) => {
  return (
    <>
      <Head>
        <title key="title">{meta.title + "  Vaibhav Kubre's Blog"}</title>
        <meta
          name="author"
          content={meta.author ?? "Vaibhav Kubre"}
          key="author"
        />
        <meta name="description" content={meta.description} key="description" />
        <meta
          name="keywords"
          content={meta.keywords.join(", ")}
          key="keywords"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </Head>
      <MDXProvider components={PostComponents}>
        <main className="max-w-screen-lg mx-auto leading-relaxed" {...rest}>
          <div className="px-8">
            <PostComponents.h1>{meta.title}</PostComponents.h1>
            <pre className="text-slate-400 py-2">
              📅 {meta.published_at.toLocaleDateString()}
            </pre>
            <div className="py-8">{children}</div>
          </div>
          <div className="pb-8">
            <span></span>
          </div>
        </main>
      </MDXProvider>
    </>
  );
};

export default PostLayout;
