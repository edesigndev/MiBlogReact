import React from "react";
import Layout from "../../components/Layout";
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
