import React from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Layout = (props) => {
  return (
    <div>
      <div>
        {props.children}
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
