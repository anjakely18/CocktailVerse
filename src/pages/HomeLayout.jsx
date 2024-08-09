import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
