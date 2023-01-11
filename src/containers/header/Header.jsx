import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Web Portfolio");

  return (
    <header className="Header">
      <div className="PortfolioTitle">
        <span
          onMouseOver={() => setTitle("Carlos Franco")}
          onMouseOut={() => setTitle("Web Portfolio")}
        >
          {title}
        </span>
      </div>
      <Link to="/" className="HeaderButton HomeSpan">
        <div className="HomeButton">
          <span>Home</span>
        </div>
      </Link>
      <Link to="/diplomas" className="HeaderButton DiplomaSpan">
        <div className="DiplomaButton">
          <span>Diplomas</span>
        </div>
      </Link>
      <Link to="/projects" className="HeaderButton ProjectsSpan">
        <div className="ProjectsButton">
          <span>Projects</span>
        </div>
      </Link>
    </header>
  );
};

export { Header };
