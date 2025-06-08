import React from 'react';
import styles from './AboutText.module.scss';

const AboutText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.who_we_are}>
        <p>who we are</p>
        <h1>
          We’re an independent group of designers, builders, writers, and entrepreneurs obsessed
          with launching and growing brands. We work hard to toe a fine line between technology and
          art, pushing businesses into their best selves. Our work covers branding, content
          strategy, and software development.
        </h1>
      </div>
      <div className={styles.what_we_do}>
        <p>what we do</p>
        <h1>
          We’re an independent group of designers, builders, writers, and entrepreneurs obsessed
          with launching and growing brands. We work hard to toe a fine line between technology and
          art, pushing businesses into their best selves. Our work covers branding, content
          strategy, and software development.
        </h1>
      </div>
    </div>
  );
};

export default AboutText;
