import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
