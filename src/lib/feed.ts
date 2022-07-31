import { Feed } from "feed";
import { getListOfPostMeta } from "./blog";

const siteURL = process.env.SITE_URL ?? "https://kubre.in";
const date = new Date();
const me = {
  name: "Vaibhav Kubre",
  email: "v@kubre.in",
  link: "https://github.com/kubre",
};

export async function generateFeed() {
  console.log("BASE URL ==>", process.env.SITE_URL);
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

  feed.addItem({
    title: "Home",
    date: date,
    link: `${siteURL}/`,
  });

  feed.addItem({
    title: "Blog",
    date: date,
    link: `${siteURL}/blog`,
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
