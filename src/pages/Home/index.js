import React from "react";
import Card from "../../components/UI/Card";
import blogData from "../../data/blog.json";
import ImageGallery from "./imageGallery";
import RecentsPosts from "../../pages/Home/RecentsPosts/";
import Layout from "../../components/Layout";

import './style.css';
const Home = () => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: "hidden",
  };

  const sideImageHeigth = galleryHeight / 3;
  const imgArray = blogData.data.map((post) => post.image);

  return (
    <div>
      <Card>
        <ImageGallery
          largeWidthPrincipal="70%"
          smallWitdh="30%"
          sideImageHeigth={sideImageHeigth}
          galleryStyle={galleryStyle}
          imgArray={imgArray}
        ></ImageGallery>
      </Card>
      <Layout>
        <RecentsPosts style={{ width: "100%" }} />
      </Layout>
    </div>
  );
};

export default Home;
