import React from "react";
import "./style.css";
const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="jojo"></img>
    </div>
  );
};

const ImageGallery = (props) => {
  return (
    // eslint-disable-next-line
    <div className="galleryPost" style={props.galleryStyle}>
      <section style={{ width: props.largeWidthPrincipal }}>
        <div className="mainImageWrapper">
          <img src={props.imgArray[1]} alt="jeje"></img>
        </div>
      </section>
      <section className="sideImageWrapper" style={{ width: props.smallWitdh }}>
        {props.imgArray.map((imageUrl) => (
          <SideImage
            key={props.imageUrl}
            height={props.sideImageHeigth}
            src={imageUrl}
            alt="hola"
          />
        ))}
      </section>
    </div>
  );
};

export default ImageGallery;
