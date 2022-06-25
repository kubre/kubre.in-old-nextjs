import type { NextPage } from "next";
import Head from "next/head";
import Vaibhav from "../components/Vaibhav";
import SocialMedia from "../components/SocialMedia";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vaibhav Kubre</title>
        <meta
          name="description"
          content="Vaibhav Kubre's personal homepage. Portfolio, blog and more from vaibhav"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="block md:grid md:grid-cols-2 pt-8 mx-auto">
        <div>
          <Vaibhav />
          <SocialMedia />
        </div>
        <section className="mt-8 md:mt-0">
          <h1 className="text-center font-bold text-xl">
            Recentally Published
          </h1>
        </section>
      </main>
    </>
  );
};

export default Home;
