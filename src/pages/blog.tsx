import { NextPage } from "next";
import Head from "next/head";

import Post from "@/components/Post";
import SocialMedia from "@/components/SocialMedia";
import Vaibhav from "@/components/Vaibhav";
import { getListOfPostMeta } from "@/lib/blog";
import { PostMeta } from "@/types";

interface BlogProps {
  posts: PostMeta[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Vaibhav Kubre</title>
        <meta name="description" content="Vaibhav Kubre's blog." />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8 pt-4 md:pt-8 h-auto md:h-[600px]">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <Vaibhav />
          <SocialMedia />
        </div>
        <div className="order-1 md:order-2 w-full max-w-lg px-8">
          <h2 className="text-xl font-bold my-4 md:mt-0 md:mb-8">
            ⏳ Recentally Published
          </h2>
          {posts?.map((post) => (
            <Post post={post} key={post.slug} />
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getListOfPostMeta();

  return {
    props: { posts },
  };
}

export default Blog;
