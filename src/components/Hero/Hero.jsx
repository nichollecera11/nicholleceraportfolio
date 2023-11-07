import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nick</h1>
        <p className={styles.description}>
          I'm a junior full stack web developer with experiences using React, Figma,
          NodeJS, MySQL and Laravel. Reach out if you would like to learn how
          these languages made my brain like soup
        </p>
        <a href="mailto:nichol.lecera@icloud.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
