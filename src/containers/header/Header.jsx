import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Web Portfolio");
  const navigate = useNavigate();

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
      <div className="HeaderButton HomeButton" onClick={() => navigate("/")}>
        <span className="HomeSpan">Home</span>
      </div>
      <div
        className=" HeaderButton DiplomaButton"
        onClick={() => navigate("/diplomas")}
      >
        <span className="DiplomaSpan">Diplomas</span>
      </div>
      <div
        className="HeaderButton ProjectsButton"
        onClick={() => navigate("/projects")}
      >
        <span className="ProjectsSpan">Projects</span>
      </div>
    </header>
  );
};

export { Header };
