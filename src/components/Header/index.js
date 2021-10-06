import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Inicio</a>
        <a href="#">Acerca de nosotros</a>
        <a href="#">Publicaciones</a>
        <a href="#">Contáctenos</a>
      </nav>
      <div>
        Redes Sociales
      </div>
    </header>
  )
};

export default Header;
