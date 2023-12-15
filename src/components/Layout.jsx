import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { footerAPI } from "../data/data";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default Layout;
