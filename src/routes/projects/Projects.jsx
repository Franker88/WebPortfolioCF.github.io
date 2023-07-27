import React from "react";
import "./Projects.css";
import { proyectos } from "../../information/projects/projects";

const Projects = () => {
  return (
    <section className="Projects-section">
      {proyectos.map((item, index) => {
        const ghLink = item.gh_repo === "Private" ? "" : item.gh_repo;
        const ghName = !ghLink ? " Private" : " Go there";
        const pageLink = item.page === "No page" ? "" : item.page;
        const pageName = !pageLink ? " No page" : " Go there";
        if (index % 2 === 0) {
          return (
            <div className="Project-label" key={index + 1}>
              <img className="project-img" src={item.img} alt={item.name} />
              <div className="label-resume">
                <div className="taskdec"></div>
                <ul>
                  <li>Name: {item.name}</li>
                  <li>Position: {item.position}</li>
                  <li>Time: {item.time}</li>
                  <li>
                    Completed:
                    <span className={item.completed}> {item.completed}</span>
                  </li>
                  <li>
                    GH-Repository:
                    <a
                      className={ghLink || "Private"}
                      href={ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ghName}
                    </a>
                  </li>
                  <li>
                    Page:
                    <a
                      className={pageLink || "Nopage"}
                      href={pageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pageName}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <div className="Project-label" key={index + 1}>
              <div className="label-resume">
                <div className="taskdec"></div>
                <ul>
                  <li>Name: {item.name}</li>
                  <li>Position: {item.position}</li>
                  <li>Time: {item.time}</li>
                  <li>
                    Completed:
                    <span className={item.completed}> {item.completed}</span>
                  </li>
                  <li>
                    GH-Repository:
                    <a
                      className={ghLink || "Private"}
                      href={ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ghName}
                    </a>
                  </li>
                  <li>
                    Page:
                    <a
                      className={pageLink || "Nopage"}
                      href={pageLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pageName}
                    </a>
                  </li>
                </ul>
              </div>
              <img className="project-img" src={item.img} alt={item.name} />
            </div>
          );
        }
      })}
    </section>
  );
};

export { Projects };
