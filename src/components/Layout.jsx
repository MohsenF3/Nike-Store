import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { footerAPI } from "../data/data";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Layout = () => {
  // Check if it's the first visit by looking for a flag in sessionStorage
  const isFirstVisit = sessionStorage.getItem("isFirstVisit") === null;

  const [loading, setLoading] = useState(isFirstVisit);

  useEffect(() => {
    // If it's the first visit, simulate a 2-second delay before setting loading to false
    if (isFirstVisit) {
      const timeoutId = setTimeout(() => {
        setLoading(false);
        // Set a flag in sessionStorage to indicate that it's no longer the first visit
        sessionStorage.setItem("isFirstVisit", "false");
      }, 2000);

      // Clear the timeout to avoid memory leaks when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isFirstVisit]);
  return (
    <>
      {loading && (
        // Render the loading component while waiting
        <Loader />
      )}

      {!loading && (
        // Render all components, including images, once loading is complete
        <>
          <Navbar />
          <Outlet />
          <Footer footerAPI={footerAPI} />
        </>
      )}
    </>
  );
};

export default Layout;
