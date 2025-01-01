import React from 'react';
import styles from './singleDescriptionBanner.module.scss';

type SingleDescriptionBanner = {
  heroImg: string;
  subText: string;
  imgOne: string;
  imgTwo?: string;
};
const SingleDescriptionBanner = ({ heroImg, subText, imgOne, imgTwo }: SingleDescriptionBanner) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={heroImg} alt="image" />
      </div>

      <div className={styles.content}>
        <div className={styles.text_content}>
          <p className={styles.sub}>{subText} </p>
        </div>

        <div className={styles.img_content}>
          <div className={styles.img_container}>
            <img src={imgOne} alt="image" />
          </div>
          <div className={styles.img_container}>
            <img src={imgTwo} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDescriptionBanner;
