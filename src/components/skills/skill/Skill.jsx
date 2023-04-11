import styles from "./skill.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


function Skill({tech,pos}) {
    const dummy = tech.length % 2 != 0
  function DisplayTech({ name, level,dummy }) {
    return (
      <div className={styles.containerSkill}>
        {!dummy && <div className={styles.icon}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>}
        <div className={styles.contaierSkillName}>
          <p className={styles.nameSkill}>{name}</p>
          <p>{level}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h3>{pos}</h3>
      <div className={styles.techContainer}>
        {tech.map((skill) => (
          <DisplayTech {...skill} />
        ))}
        {dummy && <DisplayTech dummy/>}
      </div>
    </div>
  );
}

export default Skill;
