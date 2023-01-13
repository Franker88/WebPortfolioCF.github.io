import React from "react";
import "./Home.css";
import MainPhoto from "../../assets/MainPhoto.jpg";

const Home = () => {
  return (
    <section className="Home-Hero">
      <div className="Hero-container">
        <article className="Hero-resume">
          <h1 className="Resume-title">About me:</h1>
          <div className="Resume-card">
            Greetings! I'm Carlos Franco, an Informatic Engineer from Venezuela,
            especialized in Web Development. Trought my career i was learning
            about Networks, Robotic, Telecommunicatons, and more... but the
            think that got me was development, programming. First I went across
            the Web Development path, but now wanna learn about another things:
            IA, Data Science, and I'll do it after get specialized on this way.
          </div>
        </article>
        <div className="Hero-divider"></div>
        <img className="HeroImg" src={MainPhoto} alt="Profile" />
      </div>
    </section>
  );
};

export { Home };
