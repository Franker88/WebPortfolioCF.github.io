import React from "react";
import "./Diplomas.css";
import { certificados } from "../../information/diplomas/diplomas.js";
import languages from "./images/lenguaje.png";
import dev1 from "./images/dev1.jpg";
import dev2 from "./images/dev2.jpg";

const Diplomas = () => {
  return (
    <div className="Diplomas-container">
      <section className="Diplomas-section development-section">
        <h2 className="Diplomas-Title">Development</h2>
        <p className="Diploma-development development-resume">
          Using sources like youtube, Udemy, Platzi and more, got specialized in
          Development areas, particularly in Web Development with Javascript,
          PHP, React and more.
        </p>
        <div className="dev-images">
          <img className="dev-img" src={dev1} alt="Web development" />
          <img className="dev-img" src={dev2} alt="Software development" />
        </div>
      </section>

      <a
        className="Platzi-button"
        href="https://platzi.com/p/franker88/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Platzi Profile
      </a>

      <section className="More-diplomas">
        <div className="Diplomas-section languages-section">
          <h2 className="Diplomas-Title">Languages</h2>
          <p className="Diploma-language language-resume">
            Using Platzi and more tools like Duolingo, subtitles in videos and
            talking with more people, I'm learning to speak English and
            Portuguese
          </p>
          <img className="language-img" src={languages} alt="Languages" />
        </div>
        <div className="Diplomas-section extra-section">
          <h2 className="Diplomas-Title">Other sources</h2>
          <br />
          <br />
          {certificados.map((item, index) => (
            <div className="Diploma-item" key={index + 1}>
              <a
                className="Diploma"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { Diplomas };
