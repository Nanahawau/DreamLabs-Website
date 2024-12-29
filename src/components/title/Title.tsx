import React from 'react';
import styles from './title.module.scss';

type titleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: titleProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.sub_title}>{subtitle}</p>
    </div>
  );
};

export default Title;
