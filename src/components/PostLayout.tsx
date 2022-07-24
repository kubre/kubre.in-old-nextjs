import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import Comment from "@/components/Comment";
import * as PostComponents from "@/components/PostComponents";
import { PostMeta } from "@/types";
import Image from "next/image";

const PostLayout: React.FC<{ meta: PostMeta; children?: any }> = ({
  meta,
  children,
  ...rest
}) => {
  return (
    <>
      <Head>
        <title key="title">{meta.title}</title>
        <meta name="description" content={meta.description} key="description" />
        <meta
          name="author"
          content={meta.author ?? "Vaibhav Kubre"}
          key="author"
        />

        <meta
          property="og:url"
          content={`https://kubre.in/posts/${meta.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://kubre.in/${meta.image}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kubre.in" />
        <meta
          property="twitter:url"
          content={`https://kubre.in/posts/${meta.slug}`}
        />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://kubre.in/${meta.image}`} />

        <meta name="keywords" content={meta.tags.join(", ")} key="keywords" />
      </Head>
      <MDXProvider components={PostComponents}>
        <main
          className="max-w-screen-lg mx-auto leading-relaxed px-8"
          {...rest}
        >
          <div>
            <div className="py-8">
              <PostComponents.h1 className>{meta.title}</PostComponents.h1>
              <pre className="text-slate-400 py-2">📅 {meta.publishedAt}</pre>
            </div>
            <Image
              src={`/${meta.image}` ?? ""}
              alt={meta.title}
              width={768}
              height={220}
              layout="responsive"
              className="invert"
            />
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
