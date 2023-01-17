import React from "react";
import "./SoftSkills.css";

const mainSkills = [
  { title: "English", lvl: "70%", desc: "Great" },
  { title: "Logic Reasoning", lvl: "100%", desc: "Excelent" },
  { title: "Adaptability", lvl: "90%", desc: "Excelent" },
  { title: "Portuguese", lvl: "35%", desc: "Good" },
  { title: "Drafting", lvl: "100%", desc: "Excelent" },
  { title: "Numeric Reasoning", lvl: "100%", desc: "Excelent" },
  { title: "Responsibility", lvl: "100%", desc: "Excelent" },
  { title: "Efficiency", lvl: "100%", desc: "Excelent" },
];

const SoftSkills = () => {
  return (
    <div className="SoftSkills-container">
      <div className="Title-container">
        <h1 className="SoftSkills-title">Main Skills</h1>
      </div>
      <div className="My-skills">
        {mainSkills.map((skill, index) => (
          <div className="Skill" key={index + 1}>
            <h3>{skill.title}</h3>
            <div className="Skill-bar">
              <span className="Skill-desc">{skill.desc}</span>
              <span className="Skill-percent">{skill.lvl}</span>
              <div
                className={`Skill-lvl ${skill.desc}`}
                style={{ width: skill.lvl }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SoftSkills };
