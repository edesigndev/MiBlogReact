import React from "react";
import './style.css';
import Card from "../../../components/UI/Card";

const RecentsPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: '20px' }}>
        <div className="postImageWrapper" >
          <img src={"https://wallpaperaccess.com/full/3949076.jpg"} alt="" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>Tecnología</span>
          <h2>React</h2>
          <span>Publicado el 09 de setiembre del 2021</span>
          <p>
            React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
            React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RecentsPosts;
