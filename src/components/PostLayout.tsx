import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import Comment from "@/components/Comment";
import * as PostComponents from "@/components/PostComponents";
import { PostMeta } from "@/types";

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
        <meta property="og:title" content={meta.title} />
      </Head>
      <MDXProvider components={PostComponents}>
        <main
          className="max-w-screen-lg mx-auto leading-relaxed px-8"
          {...rest}
        >
          <div>
            <div className="py-8">
              <PostComponents.h1 className>{meta.title}</PostComponents.h1>
              <pre className="text-slate-400 py-2">
                📅 {new Date(meta.publishedAt).toLocaleDateString()}
              </pre>
            </div>
            <div className="py-8">{children}</div>
          </div>
          <div className="pb-8">
            <Comment />
          </div>
        </main>
      </MDXProvider>
    </>
  );
};

export default PostLayout;
