import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <nav className="py-4 flex text-center justify-center px-8 gap-x-2 md:gap-x-8">
      <NavItem title="Blog" href="/" />
      <NavItem title="Portfolio" href="/portfolio" />
    </nav>
  );
};

export default Navbar;

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const activeClasses = "bg-slate-50 text-slate-900";

  return (
    <Link href={href}>
      <a
        className={`${
          isActive && activeClasses
        } py-2 px-2 w-full md:w-36 uppercase rounded transition hover:bg-slate-50 hover:text-slate-900`}
      >
        {title}
      </a>
    </Link>
  );
};
