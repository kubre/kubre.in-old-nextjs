import type { NextPage } from "next";
import Head from "next/head";
import Vaibhav from "@/components/Vaibhav";
import SocialMedia from "@/components/SocialMedia";
import { generateFeed } from "@/lib/feed";
import { writeFileSync } from "fs";

const Home: NextPage = () => {
  const FullstackDiv = (
    <div>
      <h2 className="font-bold text-xl">
        📚 FullStack Engineer at{" "}
        <a target="_blank" rel="noreferrer" href="https://www.hellotars.com/">
          TARS
        </a>
      </h2>
      <p className="text-sm pt-1 pl-4">(Dec 2021 - Present)</p>
      <p className="pl-4 pt-2 text-slate-300">
        From Dec 2021 working at TARS from chatbot builder to live chat.
        Building new features everyday.
      </p>
    </div>
  );

  const FreelancerDiv = (
    <div className="mt-2">
      <h2 className="font-bold text-xl">⏰ Freelancer</h2>
      <p className="text-sm pt-1 pl-4">(Jun 2017 - Dec 2021)</p>
      <p className="pl-4 pt-2 text-slate-300">
        Worked as Freelancer making websites and mobile apps, alongside being a
        CS Student. Checkout the websites I worked on{" "}
        <OutLink href="https://taxglobe.in" title="TaxGlobe.in" />,{" "}
        <OutLink href="https://gatearch.in" title="GateArch.in" />,{" "}
        <OutLink
          href="https://wonderlearning.in/admin"
          title="Wonder Learning"
        />
        , and more.
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title key="title">Vaibhav Kubre</title>
        <meta
          name="description"
          content="Vaibhav Kubre's personal homepage. Portfolio, blog, and more from me."
        />

        <meta property="og:url" content="https://kubre.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vaibhav Kubre" />
        <meta
          property="og:description"
          content="Vaibhav Kubre's personal homepage. Portfolio, blog, and more from me."
        />
        <meta property="og:image" content="https://kubre.in/images/me.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="kubre.in" />
        <meta property="twitter:url" content="https://kubre.in" />
        <meta name="twitter:title" content="Vaibhav Kubre" />
        <meta
          name="twitter:description"
          content="Vaibhav Kubre's personal homepage. Portfolio, blog, and more from me."
        />
        <meta name="twitter:image" content="https://kubre.in/images/me.jpg" />
      </Head>

      <main className="block md:grid md:grid-cols-2 pb-8 pt-4 md:pt-8 h-auto md:h-[600px]">
        <div className="flex justify-center flex-col">
          <Vaibhav />
          <SocialMedia />
        </div>
        <div className="pt-8 max-w-md flex justify-center items-center">
          <div className="grid gap-y-4 px-8">
            {FullstackDiv}
            {FreelancerDiv}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

interface OutLinkProps {
  href: string;
  title: string;
}

const OutLink = ({ href, title }: OutLinkProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="text-sky-500 hover:bg-sky-500 hover:text-white transition"
    >
      {title}
    </a>
  );
};

export async function getStaticProps() {
  console.log("== Generating feed ==");
  const feed = await generateFeed();
  writeFileSync("./public/feed.json", feed.json1());
  writeFileSync("./public/feed.xml", feed.rss2());
  console.log("== FEED WRITE DONE ==");
  return { props: {} };
}
