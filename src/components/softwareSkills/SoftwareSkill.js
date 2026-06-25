import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <p>
                  {skills.iconSrc ? (
                    <img
                      src={typeof skills.iconSrc === "object" ? skills.iconSrc.default : skills.iconSrc}
                      alt={skills.skillName}
                      className="skill-icon"
                    />
                  ) : skills.fontAwesomeClassname ? (
                    <i className={skills.fontAwesomeClassname} />
                  ) : null}
                  {skills.skillName}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
