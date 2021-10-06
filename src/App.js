import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Post from "./components/Post";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Menu />
          <Route path="/" exact component={Home} />
          <Route path="/post/:slug" component={Post} />
        </div>
      </Router>
    </div>
  );
}

export default App;
