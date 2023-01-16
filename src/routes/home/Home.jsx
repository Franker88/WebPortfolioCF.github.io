import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Skills } from "../../components/skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <Hero />
      <Skills />
    </div>
  );
};

export { Home };
