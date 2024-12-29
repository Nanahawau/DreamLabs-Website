import React from 'react';
import styles from './misson.module.scss';

type MissionProps = {
  text: string;
};
const Mission = ({ text }: MissionProps) => {
  return <div className={styles.mission}>{text}</div>;
};

export default Mission;
