import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* Navbar  */}
      {/* <!-- dark mode toggler --> */}
      <label htmlFor="darkmode">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* <!-- nav bar --> */}
        <Navbar />
        <main className="main">
          <Outlet />
        </main>

        {/* footer  */}
        <Footer />
      </div>
    </div>
  );
};
