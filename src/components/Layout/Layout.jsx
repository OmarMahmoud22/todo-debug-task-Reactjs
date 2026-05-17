// import React from 'react'
import Navbar from "../UI/Navbar/Navbar";
import Sidebar from "../UI/Sidebar/Sidebar";
import Footer from "../UI/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="layout-wrapper">
        <Sidebar />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
