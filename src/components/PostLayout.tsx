import Head from "next/head";
import Image from "next/image";
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
        <title>{meta.title} | Vaibhav Kubre&apos;s Blog</title>
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
      </Head>
      <MDXProvider components={PostComponents}>
        <main className="max-w-screen-md mx-auto leading-relaxed" {...rest}>
          <div className="px-8">
            <h1 className="pb-4 pt-8 text-4xl md:text-6xl font-bold">
              {meta.title}
            </h1>
            <div className="text-slate-400">
              <span className="gap-x-1 text-sm">
                <span>📝 Publshed at: </span>
                <span>{meta.published_at.toLocaleDateString()}</span>
              </span>
            </div>
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
