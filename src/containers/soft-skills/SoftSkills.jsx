import React from "react";
import "./SoftSkills.css";
import languages from "../../assets/img/learnedSkills.jpg";
import numbers from "./img/numbers.png";
import logic from "./img/logic.png";
import efficiency from "./img/efficiency.png";
import adapt from "./img/adapt.png";

const mainSkills = [
  { title: "Numeric Reasoning", icon: numbers },
  { title: "Logical Reasoning", icon: logic },
  { title: "Efficiency", icon: efficiency },
  { title: "Adaptability", icon: adapt },
];

const learnedSkills = [
  { title: "Drafting", lvl: "100%", desc: "Excelent" },
  { title: "English", lvl: "80%", desc: "Great" },
  { title: "Portuguese", lvl: "35%", desc: "Good" },
];

const SoftSkills = () => {
  return (
    <div className="SoftSkills-container">
      <div className="Title-container">
        <h1 className="SoftSkills-title">Main Skills</h1>
      </div>
      <div className="My-soft-skills">
        <div className="Languages-div">
          <h1 className="skills-learned-title" style={{textAlign: "center"}}>Skills Learned</h1>
          <div className="img-container">
            <img className="language-skills-img" src={languages} alt="Languages" />
          </div>
          {learnedSkills.map((skill, index)=>(
            <div className="learnedSkill" key={index+1}>
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
        <div className="My-W">
          <h1 className="skills-learned-title" style={{textAlign: "center"}}>Natural Skills</h1>
          <div className="skills-container">
            {mainSkills.map((skill, index) => (
              <div className="Skill" key={index + 1}>
                <div className="skill-icon-div">
                  <img className="skill-icon" src={skill.icon} alt={skill.title} />
                </div>
                <h1>{skill.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SoftSkills };
