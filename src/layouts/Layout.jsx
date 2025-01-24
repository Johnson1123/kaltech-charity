import React from "react";
import Footer from "../components/large/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/large/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
