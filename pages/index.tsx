import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-auto md:h-screen">
      <Head>
        <title>Vaibhav Kubre</title>
        <meta
          name="description"
          content="Vaibhav Kubre's personal homepage. Portfolio, blog and more from vaibhav"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full">
        <nav className="py-4 flex text-center justify-around md:justify-end px-8 gap-x-2 md:gap-x-8">
          <Link href="/">
            <a className="py-2 px-2 w-full md:w-36 uppercase rounded bg-slate-50 text-slate-900 transition hover:bg-slate-50 hover:text-slate-900 hidden md:inline">Home</a>
          </Link>
          <Link href="/portfolio">
            <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">Portfolio</a>
          </Link>
          <Link href="/blog">
            <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">Blog</a>
          </Link>
          <Link href="/resume">
            <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">Resume</a>
          </Link>
        </nav>
        <div className="flex flex-col md:flex-row h-full pt-8 md:pt-16">
          <section className="w-full md:w-1/2">
           <div className="flex flex-col gap-y-8 max-w-screen-sm mx-auto">
           <section className="flex flex-col px-16 text-center">
              <div className="h-64 w-64 md:h-72 md:w-72 mx-auto">
                <Image
                  width={200}
                  height={200}
                  layout="responsive"
                  className="rounded-full"
                  src="/images/me.jpg"
                  alt="My avatar picture"
                />
              </div>
              <h1 className="text-2xl font-bold mt-4">Vaibhav Kubre</h1>
              <h2>(Fullstack Engineer)</h2>
              <p className="text-slate-300 mt-4 w-80 mx-auto">
                Worked as Freelancer from 2017 till end of 2021,
                Now working as Fullstack Engineer.
              </p>
            </section>
            <section className="flex justify-around px-16 md:px-24">
              <a
                target="_blank"
                rel="noreferrer"
                className="p-2 cursor-pointer rounded-full"
                href="mailto:v@kubre.in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/kubre"
                className="p-2 cursor-pointer rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/kubre"
                className="p-2 cursor-pointer rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </section>
           </div>
          </section>
          <section className="mt-8 md:mt-0 h-full w-full md:w-1/2">
            <h1 className="text-center font-bold text-xl">
              Recentally Published
            </h1>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
