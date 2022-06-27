import Head from "next/head";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";

import { PostMeta } from "@/types";
import * as PostComponents from "@/components/PostComponents";

const components = PostComponents;

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
      <MDXProvider components={components}>
        <main className="max-w-screen-md mx-auto" {...rest}>
          <Image
            src={meta.image}
            alt={meta.title}
            width={786}
            height={400}
            layout="responsive"
          />
          <div className="px-8">
            <h1 className="text-2xl font-bold">{meta.title}</h1>
            <div className="py-8">{children}</div>
          </div>
        </main>
      </MDXProvider>
    </>
  );
};

export default PostLayout;
