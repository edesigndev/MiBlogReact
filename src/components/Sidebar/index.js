import React, { useState, useEffect } from "react";
import Card from "../UI/Card";

import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    setposts(blogPost.data);
  }, [posts]);

  return (
    <div className="sidebarContainer" style={{
      width: props.width
    }}>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Sobre Mí</span>
        </div>
        <div className="profileImageContainer">
          <img src=""></img>
        </div>
        <div className="cardBody">
          <p className="personalBio">
            Mi nombre es Edgar Lazaro, soy desarrollador Front End
          </p>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Publicaciones recientes</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPosts">
                  <h3>{post.author}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
