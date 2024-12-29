import React from 'react';
import styles from './Gallery.module.scss';

type GalleryProps = {
  topImgOne: string;
  topImgTwo: string;
  bottomImg: string;
};
const Gallery = ({ topImgOne, topImgTwo, bottomImg }: GalleryProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.top_section}>
        <img src={topImgOne} alt="" />
        <img src={topImgTwo} alt="" />
      </div>

      <div className={styles.bottom_section}>
        <img src={bottomImg} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
