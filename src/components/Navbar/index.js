import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import iconSearch from "../../assets/icons/search-solid.svg";

const NavBar = () => {
  const [busqueda, setbusqueda] = useState(false);

  const mostrarBusqueda = () => {
    setbusqueda(true);
  };

  const inputVisible = busqueda ? "" : "none";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/"> Inicio </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros"> Nosotros </NavLink>
        </li>
        <li>
          <NavLink to="/post"> Post </NavLink>
        </li>
        <li>
          <NavLink to="/contactenos"> Contactenos </NavLink>
        </li>
      </ul>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Buscar..."
            style={{ display: inputVisible }}
          ></input>
          <img src={iconSearch} alt="Buscar" onClick={mostrarBusqueda}></img>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
