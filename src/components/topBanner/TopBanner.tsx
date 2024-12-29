import React from 'react';
import styles from './topbanner.module.scss';

type TopBannerProps = {
  heroImg: string;
  mainText: string;
  subText: string;
  imgOne: string;
  imgTwo: string;
};
const TopBanner = ({ heroImg, mainText, subText, imgOne, imgTwo }: TopBannerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={heroImg} alt="image" />
      </div>

      <div className={styles.content}>
        <div className={styles.text_content}>
          <p className={styles.main}>{mainText} </p>
          <p className={styles.sub}>{subText} </p>
        </div>

        <div className={styles.img_content}>
          <img src={imgOne} alt="image" />
          <img src={imgTwo} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
