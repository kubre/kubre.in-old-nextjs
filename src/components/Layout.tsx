import Navbar from "@/components/Navbar";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <link key="favicon" rel="icon" type="image/png" href="/images/me.jpg" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
