import React from 'react';
import styles from './topbanner.module.scss';

type TopBannerProps = {
  heroImg: string;
  mainText: string;
  subText: string;
  imgOne: string;
  imgTwo: string;
  pageName: string;
};

type PageName = 'hertitude' | 'alo' | 'mavin' | 'chezro' | 'evos';

const TopBanner = ({ heroImg, mainText, subText, imgOne, imgTwo, pageName }: TopBannerProps) => {
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
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={heroImg} alt="image" />
      </div>

      <div
        className={styles.content}
        style={isPageName(pageName) ? pageStyles[pageName] : pageStyles.default}>
        <div className={styles.text_content}>
          <p className={styles.main}>{mainText} </p>
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

export default TopBanner;
