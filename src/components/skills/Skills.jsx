import React from "react";
import { DevSkills } from "../../containers/dev-skills/DevSkills";
import { SoftSkills } from "../../containers/soft-skills/SoftSkills";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="Skills-container">
      <div className="Soft-div">
        <SoftSkills />
      </div>
      <div className="Dev-div">
        <DevSkills />
      </div>
    </section>
  );
};

export { Skills };
