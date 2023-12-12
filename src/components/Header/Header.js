import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="title">
          <h1>Harshal Kalgaonakr</h1>
        </div>
        <div className="elements">
          <a className="home" href="/">
            Home
          </a>
          <a className="about" href="/about">
            About
          </a>
          <a className="project" href="/project">
            Project
          </a>

          <a
            href="https://techlenschronicles.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="blog">Blog</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
