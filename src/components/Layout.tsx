import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
