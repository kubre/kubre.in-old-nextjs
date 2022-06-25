import type { NextPage } from "next";
import Head from "next/head";
import HomeAvatar from "../components/HomeAvatar";
import SocialIcons from "../components/SocialIcons";

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

      <main className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row h-full pt-8 md:pt-16">
          <section className="w-full md:w-1/2">
           <div className="flex flex-col gap-y-8 max-w-screen-sm mx-auto">
            <HomeAvatar />
            <SocialIcons />
           </div>
          </section>
          <section className="mt-8 md:mt-0 h-full w-full md:w-1/2">
            <h1 className="text-center font-bold text-xl">
              Recentally Published
            </h1>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
