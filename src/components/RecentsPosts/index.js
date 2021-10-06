import React from "react";
import Card from "../UI/Card";

const RecentsPosts = (props) => {
  return (
    <div style={props.style}>
      <Card>
        <div className="postImageWrapper" style={{ textAlign: "center" }}>
          <span>Tecnologia</span>
          <span>React</span>
          <span>Publicado el 21 de Julio del 2016</span>
          <p>React es una biblioiteca de javascript</p>
        </div>
      </Card>
    </div>
  );
};

export default RecentsPosts;
