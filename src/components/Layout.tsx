import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
