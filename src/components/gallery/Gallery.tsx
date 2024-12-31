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
        <img src={topImgOne} alt="image" />
        <img src={topImgTwo} alt="image" />
      </div>

      <div className={styles.bottom_section}>
        <img src={bottomImg} alt="image" />
      </div>
    </div>
  );
};

export default Gallery;
