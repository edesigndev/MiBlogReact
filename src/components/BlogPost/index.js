import React, { useEffect, useState } from "react";
import blogPost from "../../data/blog.json";
import Card from "../UI/Card";

import "./style.css";

const BlogPost = (props) => {
  const [post, setpost] = useState({
    id: "",
    author: "",
    text: "",
    image: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find((elem) => elem.slug === slug);
    setpost(post);
  }, [post, props.match.params.slug]);

  if (post.image === "") return null;

  return (
    <div className="blogPostContainer">
      <Card style={{ padding: "20px 0" }}>
        <div className="blogHeader">
          <span>Publicado por: {post.author}</span>
        </div>
        <div className="postImageContainer">
          <img src={post.image} alt=""></img>
        </div>
        <div className="postContent">
          <span>{post.text}</span>
        </div>
      </Card>

    </div>
  );
};

export default BlogPost;
