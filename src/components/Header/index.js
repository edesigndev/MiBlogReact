import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <Header className="header">
        <nav className="headerMenu">
          <a href="!#">Inicio</a>
        </nav>
        <nav className="headerMenu">
          <a href="!#">Nosotros</a>
        </nav>
        <nav className="headerMenu">
          <a href="!#">Post</a>
        </nav>
        <nav className="headerMenu">
          <a href="!#">Contactenos</a>
        </nav>
      </Header>
    </div>
  );
};

export default Header;
