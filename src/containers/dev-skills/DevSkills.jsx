import React, { useEffect } from "react";
import "./DevSkills.css";
import { useCarousel } from "../../hooks/useCarousel";
import html5 from "./imgSkills/html5logo.png";
import css3 from "./imgSkills/css3logo.png";
import js from "./imgSkills/JavaScriptlogo.png";
import php from "./imgSkills/phplogo.png";
import mysql from "./imgSkills/mysqllogo.png";
import clogos from "./imgSkills/c-logo.png";
import python from "./imgSkills/pythonlogo.png";
import network from "./imgSkills/networklogo.png";
import scrum from "./imgSkills/scrumlogo.png";
import react from "./imgSkills/reactlogo.png";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillsList = [
  { title: "html5", src: html5 },
  { title: "css3", src: css3 },
  { title: "js", src: js },
  { title: "php", src: php },
  { title: "mysql", src: mysql },
  { title: "c and c++", src: clogos },
  { title: "python", src: python },
  { title: "network", src: network },
  { title: "scrum", src: scrum },
  { title: "react", src: react },
];

const DevSkills = () => {
  const { index, next, setNext, handlePrevious, handleNext } = useCarousel();

  useEffect(() => {
    const interval = setInterval(() => {
      setNext("");
      setTimeout(() => {
        handleNext(skillsList.length);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="DevSkills-container">
      <div className="Img-container">
        <div className="Img-boxes">
          <img
            className={`Skill-img ${next}`}
            src={skillsList[index].src}
            alt={skillsList[index].title}
          />
          <div className="Button-container">
            <div type="button" className="Carousel-button Carousel-left">
              <FontAwesomeIcon
                className="Angle Angle-left"
                icon={faAnglesLeft}
                onClick={() => handlePrevious(skillsList.length)}
              />
            </div>
            <div className="Carousel-button Carousel-right">
              <FontAwesomeIcon
                className="Angle Angle-right"
                icon={faAnglesRight}
                onClick={() => handleNext(skillsList.length)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="First-divider"></div>
      <div className="DevSkills-resume">
        <p className="Dev-paragraph">
          Having knowledge about the basic languages and tools for web
          development like the markup language: HTML, CSS for Styles and the
          respective programming language: Javascript.
        </p>
        <p className="Dev-paragraph">
          Sometimes, using PHP with these technologies, and MySQL as Data Base
          Manager. Secondly, I learned about C and C++ in the beginning of my
          career, and then, know about other languages like Python.
        </p>
        <p className="Dev-paragraph">
          Also, I got some courses about Networking and Scrum Fundamentals. Now,
          I'm getting specialized in React's technology, precisely for Web
          Development.
        </p>
      </div>
    </div>
  );
};

export { DevSkills };
