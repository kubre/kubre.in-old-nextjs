import fs from "fs";
import { promisify } from "util";
import { NextPage } from "next";
import Image from "next/image";

import Head from "next/head";
import Vaibhav from "@/components/Vaibhav";
import SocialMedia from "@/components/SocialMedia";
import Link from "next/link";
import React from "react";
import Post, { PostProps } from "@/components/Post";

interface BlogProps {
  posts: Array<PostProps>;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Vaibhav Kubre</title>
        <meta name="description" content="Vaibhav Kubre's blog." />
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-8 pt-0 md:pt-8">
        <div className="order-2 md:order-1">
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
