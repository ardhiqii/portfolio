import Skill from "./skill/Skill";
import styles from "./skills.module.css";
import React from "react";

const frontEndTech = [
  {
    name: "HTML",
    level: "Intermediate",
  },
  {
    name: "CSS",
    level: "Intermediate",
  },
  {
    name: "Javascript",
    level: "Intermediate",
  },
  {
    name: "React",
    level: "Intermediate",
  },
  {
    name: "React Native",
    level: "Basic",
  },
  {
    name: "Next",
    level: "Basic",
  },
];
const backEndTech = [
  {
    name: "Node Js",
    level: "Basic",
  },
  {
    name: "Python",
    level: "Basic",
  },
  {
    name: "MYSQL",
    level: "Intermediate",
  },
  {
    name: "Firebase",
    level: "Basic",
  },
  {
    name: "SQL",
    level: "Intermediate",
  },
];

function Skills() {
  return (
    <div className={styles.containerBackground} id="skills">
      <div className={styles.heading}>
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>
      <div className={styles.container}>
        <Skill tech={frontEndTech} pos={'Frontend Developer'} />
        <Skill tech={backEndTech} pos={'Backend Developer'} />
      </div>
    </div>
  );
}

export default Skills;
