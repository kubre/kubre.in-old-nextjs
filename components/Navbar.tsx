import Link from "next/link";

const Navbar  = () => {
  return (
    <nav className="py-4 flex text-center justify-around md:justify-end px-8 gap-x-2 md:gap-x-8">
      <Link href="/">
        <a className="py-2 px-2 w-full md:w-36 uppercase rounded bg-slate-50 text-slate-900 transition hover:bg-slate-50 hover:text-slate-900 hidden md:inline">
          Home
        </a>
      </Link>
      <Link href="/portfolio">
        <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">
          Portfolio
        </a>
      </Link>
      <Link href="/blog">
        <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">
          Blog
        </a>
      </Link>
      <Link href="/resume">
        <a className="py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900">
          Resume
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
