import Head from "next/head";
import Vaibhav from "../components/Vaibhav";
import SocialMedia from "../components/SocialMedia";

const Blog = () => {
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
        <section className="order-1 md:order-2 w-full max-w-md px-8">
          No Posts yet...
        </section>
      </main>
    </>
  );
};

export default Blog;
