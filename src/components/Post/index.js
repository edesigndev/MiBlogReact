import React from "react";
import Layout from "../Layout";
import BlogPost from "../../components/BlogPost";
import "./style.css";

const Post = (props) => {
  return (
    <Layout>
      <BlogPost {...props}></BlogPost>
    </Layout>
  );
};

export default Post;
