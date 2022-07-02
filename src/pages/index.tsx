import type { NextPage } from "next";
import Head from "next/head";
import Vaibhav from "@/components/Vaibhav";
import SocialMedia from "@/components/SocialMedia";

const Home: NextPage = () => {
  const FullstackDiv = (
    <div>
      <h2 className="font-bold text-xl">
        👨‍💻 FullStack Engineer at{" "}
        <a target="_blank" rel="noreferrer" href="https://www.hellotars.com/">
          TARS
        </a>
      </h2>
      <p className="text-sm mt-1">(Dec 2021 - Present)</p>
      <p className="pl-4 mt-2 text-slate-300">
        From Dec 2021 working at TARS from chatbot builder to live chat.
        Building new features everyday.
      </p>
    </div>
  );

  const FreelancerDiv = (
    <div className="mt-2">
      <h2 className="font-bold text-xl">⌨ Freelancer</h2>
      <p className="text-sm mt-1">(Jun 2017 - Dec 2021)</p>
      <p className="pl-4 mt-2 text-slate-300">
        Worked as Freelnacer making websites and mobile apps, alongside being a
        CS Student. Checkout the websites I worked on{" "}
        <OutLink href="https://www.taxglobe.in" title="TaxGlobe.in" />,{" "}
        <OutLink href="https://www.gatearch.in" title="GateArch.in" />,{" "}
        <OutLink
          href="https://www.wonderlearning.in/admin"
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
          content="Vaibhav Kubre's personal homepage. Portfolio, blog and more from vaibhav"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="block md:grid md:grid-cols-2 pb-8 pt-0 md:pt-8 h-auto md:h-[600px]">
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
