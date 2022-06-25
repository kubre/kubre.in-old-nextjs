import Head from "next/head";
import Vaibhav from "../components/Vaibhav";
import SocialMedia from "../components/SocialMedia";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Vaibhav Kubre</title>
        <meta
          name="description"
          content="Vaibhav Kubre's portfolio and page for resume."
        />
      </Head>

      <main className="block md:grid md:grid-cols-2 pt-0 md:pt-8 mx-auto">
        <div className="hidden md:block">
          <Vaibhav />
        </div>
        <section className="mt-8 md:mt-0 px-8 font-">
          <div className="max-w-md grid gap-y-4">
            <div>
              <h1 className="font-bold text-xl">
                FullStack Engineer @{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.hellotars.com/"
                >
                  TARS
                </a>
              </h1>
              <p className="text-sm mt-1">(Dec 2021 - Present)</p>
              <p className="pl-4 mt-2 text-slate-300">
                From Dec 2021 working at TARS from chatbot builder to live chat.
                Building new features everyday.
              </p>
            </div>

            <div className="mt-4">
              <h1 className="font-bold text-xl">Freelancer</h1>
              <p className="text-sm mt-1">(Jun 2017 - Dec 2021)</p>
              <p className="pl-4 mt-2 text-slate-300">
                Worked as Freelnacer making websites and mobile apps, alongside
                being a CS Student. Checkout the websites I worked on{" "}
                <OutLink href="https://www.taxglobe.in" title="TaxGlobe.in" />,{" "}
                <OutLink href="https://www.gatearch.in" title="GateArch.in" />,{" "}
                <OutLink
                  href="https://www.wonderlearning.in/admin"
                  title="Wonder Learning"
                />
                , and more.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;

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
