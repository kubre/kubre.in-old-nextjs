import fs from "fs";
import { promisify } from "util";
import { NextPage } from "next";
import Image from "next/image";

import Head from "next/head";
import Vaibhav from "@/components/Vaibhav";
import SocialMedia from "@/components/SocialMedia";

interface BlogProps {
  posts: Array<{ title: string; image: string; slug: string }>;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Vaibhav Kubre</title>
        <meta name="description" content="Vaibhav Kubre's blog." />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-y-4 pb-8 pt-0 md:pt-8">
        <div className="order-2 md:order-1">
          <Vaibhav />
          <SocialMedia />
        </div>
        <div className="order-1 md:order-2 w-full max-w-md px-8">
          {posts?.map((post) => (
            <div className="py-8" key={post.slug}>
              <Image
                src={post.image}
                alt={post.title}
                width={768}
                height={200}
                layout="responsive"
              />
              <a
                href={`/posts/${post.slug}`}
                className="text-2xl font-bold capitalize"
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const readDir = promisify(fs.readdir);
  const postFiles = await readDir("./src/pages/posts");
  const posts = postFiles.map((file) => {
    const name = file.replace(".mdx", "");
    console.log(typeof name);
    return {
      title: name.replace(/-/g, " "),
      image: `/images/${name}.png`,
      slug: name,
    };
  });

  return {
    props: { posts },
  };
}

export default Blog;
