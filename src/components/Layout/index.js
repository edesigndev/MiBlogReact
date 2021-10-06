import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import './style.css'
const Layout = (props) => {
  return (
    <>
      <div className="container">
        {props.children}
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
