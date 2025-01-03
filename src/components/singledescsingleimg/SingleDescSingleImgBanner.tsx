import React from 'react';
import styles from './singledescsingleimg.module.scss';

type SingleDescriptionSingleImgBanner = {
  heroImg: string;
  subText: string;
  imgOne: string;
  imgTwo?: string;
};
const SingeDescSingleImgBanner = ({
  heroImg,
  subText,
  imgOne
}: SingleDescriptionSingleImgBanner) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={heroImg} alt="image" />
      </div>

      <div className={styles.content}>
        <div className={styles.text_content}>
          <p className={styles.sub}>{subText} </p>
        </div>

        <div className={styles.img_container}>
          <img src={imgOne} alt="image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default SingeDescSingleImgBanner;
