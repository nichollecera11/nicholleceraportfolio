import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import styles from "./Certificate.module.css";

import { getImageUrl } from "../../utils";

export const Certificate = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className={styles.carouselContainer} id="certificates">
      <h1 className={styles.title}>Certificates</h1>
      <div className={styles.carousel}>
        <BsArrowLeftCircleFill
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prevSlide}
        />
        {data.map((item, idx) => (
          <img
            src={getImageUrl(item.imageSrc)}
            alt={item.alt}
            key={idx}
            className={`${styles.slide} ${
              slide === idx ? styles.slide : styles.slideHidden
            }`}
          />
        ))}
        <BsArrowRightCircleFill
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextSlide}
        />
        <span className={styles.indicators}>
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`${styles.indicator} ${
                slide === idx
                  ? styles.indicatorActive
                  : styles.indicatorInactive
              }`}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};
