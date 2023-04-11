import styles from "./header.module.css";

import React, { useEffect, useState } from "react";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrolling(window.scrollY > 200));
  }, [scrolling]);
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={scrolling ? `${styles.headerBackground} ${styles.border}` : `${styles.headerBackground}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>Aufa</div>
        <div className={styles.headerRight}>
          <ul className={styles.listNav}>
            <li>
              <a onClick={handleClickScroll.bind(this, "home")}>Home</a>
            </li>
            <li>
              <a onClick={handleClickScroll.bind(this, "skills")}>Skills</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
