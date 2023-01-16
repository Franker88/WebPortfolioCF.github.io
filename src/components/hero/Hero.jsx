import React from "react";
import "./Hero.css";
import MainPhoto from "../../images/MainPhoto.jpg";

const Hero = () => {
  return (
    <section className="Home-Hero">
      <div className="Hero-container">
        <article className="Hero-resume">
          <h1 className="Resume-title">About me:</h1>
          <div className="Resume-card">
            <p>
              Greetings! I'm Carlos Franco, an Informatic Engineer from
              Venezuela. The think that got me was development, programming, and
              now I'm getting especialized in Web Development.
            </p>
          </div>
          <div className="Resume-card second-resume">
            <p>
              First I went across the Web Development path, but now wanna learn
              about another things: AI, Data Analysis, and I'll do it after get
              specialized on this way.
            </p>
          </div>
        </article>
        <div className="Hero-divider"></div>
        <img className="HeroImg" src={MainPhoto} alt="Profile" />
      </div>
    </section>
  );
};

export { Hero };
