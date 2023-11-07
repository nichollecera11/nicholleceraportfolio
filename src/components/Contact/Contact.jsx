import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
            className={styles.img}
          />
          <a href=" mailto:nichollecera11@gmail.com">
            <p>nichollecera11@gmail.com</p>
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
            className={styles.img}
          />
          <a href="https://www.linkedin.com/in/nichol-lecera-37a785197/" className={styles.aimg}>
            <p>https://www.linkedin.com/in/nichol-lecera-37a785197</p>
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github Icon"
            className={styles.img}
          />
          <a href=" https://github.com/nichollecera11" className={styles.aimg}>
            <p>https://github.com/nichollecera11</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};
