import styles from "./home.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons";
function Home() {
  return (
    <div className={styles.containerBackground} id="home">
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h1>Hi, I'am Aufa Fauqi Ardhiqi</h1>
          <p className={styles.position}>Web developer</p>
          <p>
            I'm a student at Institut Teknologi Bandung majoring in Information
            Technology Systems. I'm passionate with design and Frontend
            developer
          </p>
          <div className={styles.socials}>
            <a target="_blank" href="https://www.linkedin.com/in/ardhiqi/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/ardhiqii">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={require("../../images/photo.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
