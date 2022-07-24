import { Feed } from "feed";
import { getListOfPostMeta } from "./blog";

const siteURL = process.env.VERCEL_URL ?? "https//kubre.in";
const date = new Date();
const me = {
  name: "Vaibhav Kubre",
  email: "v@kubre.in",
  link: "https://github.com/kubre",
};

export async function generateFeed() {
  const feed = new Feed({
    title: "Vaibhav Kubre",
    description: "Vaibhav Kubre's portfolio and blog",
    id: siteURL,
    link: siteURL,
    language: "en",
    updated: date,
    image: `${siteURL}/images/me.jpg`,
    favicon: `${siteURL}/images/me.jpg`,
    copyright: "Vaibhav Kubre",
    generator: "awesome",
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
      json: `${siteURL}}/feed.json`,
    },
  });

  const posts = await getListOfPostMeta();
  for (const post of posts) {
    const url = `${siteURL}/posts/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      image: `${siteURL}/${post.image}`,
      description: post.description,
      content: post.description,
      date: new Date(post.publishedAt),
      author: [post.author ?? me],
    });
  }

  return feed;
}