import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();
  if (
    router.pathname != "/dashboard" &&
    router.pathname != "/projects/[id]" &&
    router.pathname != "/projects/[id]/tickets/[ticketId]"
  )
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  else {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }
};

export default Layout;
