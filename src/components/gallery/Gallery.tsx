import React from 'react';
import styles from './Gallery.module.scss';

type GalleryProps = {
  topImgOne: string;
  topImgTwo: string;
  bottomImg: string;
  pageName: string;
};
type PageName = 'hertitude' | 'alo' | 'mavin' | 'chezro' | 'evos';

const Gallery = ({ topImgOne, topImgTwo, bottomImg, pageName }: GalleryProps) => {
  const pageStyles: Record<PageName | 'default', { backgroundColor: string }> = {
    hertitude: { backgroundColor: '#E3E7FF' },
    alo: { backgroundColor: '#E2D4FF' },
    mavin: { backgroundColor: '#F6D7C5' },
    chezro: { backgroundColor: '#FFF8E3' },
    evos: { backgroundColor: '#DFF9FF' },
    default: { backgroundColor: '#E3E7FF' }
  };

  const isPageName = (key: string): key is PageName => {
    return ['hertitude', 'alo', 'mavin', 'chezro', 'evos'].includes(key);
  };
  return (
    <div
      className={styles.container}
      style={isPageName(pageName) ? pageStyles[pageName] : pageStyles.default}>
      <div className={styles.top_section}>
        <div className={styles.img_container}>
          <img src={topImgOne} alt="image" loading="lazy" />
        </div>
        <div className={styles.img_container}>
          <img src={topImgTwo} alt="image" loading="lazy" />
        </div>
      </div>

      <div className={styles.bottom_section}>
        <img src={bottomImg} alt="image" loading="lazy" />
      </div>
    </div>
  );
};

export default Gallery;
