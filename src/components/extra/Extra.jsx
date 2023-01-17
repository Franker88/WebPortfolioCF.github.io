import React, { useEffect } from "react";
import { useCarousel } from "../../hooks/useCarousel";
import Calistenic from "./extraImages/Calistenic.jpg";
import MartialArts from "./extraImages/MuayThai.jpg";
import Literature from "./extraImages/Literature.jpg";
import Videogames from "./extraImages/Videogames.png";
import logicandpuzzles from "./extraImages/logicandpuzzles.jpg";
import sports from "./extraImages/sports.jpg";
import "./Extra.css";

const extraIMG = [
  { title: "Calistenic", src: Calistenic, desc: "Actually" },
  { title: "Martial Arts", src: MartialArts, desc: "Actually" },
  { title: "Literature", src: Literature, desc: "Actually" },
  {
    title: "Logic and Puzzles",
    src: logicandpuzzles,
    desc: "Since my childhood",
  },
  { title: "Sports", src: sports, desc: "Since my childhood" },
  {
    title: "Videogames",
    src: Videogames,
    desc: "Since my childhood. What inspired me to take up this career",
  },
];

const Extra = () => {
  const { extraBG, setExtraBG } = useCarousel();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        const nextI = extraBG + 1;
        if (nextI >= extraIMG.length) {
          setExtraBG(0);
        } else {
          setExtraBG(extraBG + 1);
        }
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section className="Extra-section">
      <h1 className="Extra-title">Extracurricular Activities</h1>
      <div className="Extra-container">
        <div className="Extra-resume">
          <img
            className={`Img-bg`}
            src={extraIMG[extraBG].src}
            alt={extraIMG[extraBG].title}
          />
          <div className="Decoration" />
          <div className="Extra-deploy">
            {extraIMG.map((extra, index) => (
              <h2 className="Extra-h2" key={index + 1}>
                {extra.title} - {extra.desc}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Extra };
