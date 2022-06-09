import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="mt-14 flex-1 bg-[#f5f5f5]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
