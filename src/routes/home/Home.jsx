import React from "react";
import { Extra } from "../../components/extra/Extra";
import { Hero } from "../../components/hero/Hero";
import { Skills } from "../../components/skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-container">
      <Hero />
      <Skills />
      <Extra />
    </div>
  );
};

export { Home };
