import React from 'react';
import styles from './doubledescsingleimg.module.scss';

type DoubleDescSingleImgProps = {
  heroImg: string;
  mainText: string;
  subText: string;
  imgOne: string;
  pageName: string;
};
const DoubleDescSingleImg = ({ heroImg, mainText, subText, imgOne }: DoubleDescSingleImgProps) => {
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

        <div className={styles.img_container}>
          <img src={imgOne} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default DoubleDescSingleImg;
