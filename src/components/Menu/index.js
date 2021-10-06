import React from "react";
import "./style.css";
import Card from "../UI/Card/index";
import Logo from "../Logo";
import NavBar from "../Navbar";
const Menu = (props) => {
  return (
    <div>
      <Card>
        <Logo></Logo>
        <NavBar></NavBar>
      </Card>
    </div>
  );
};

export default Menu;
