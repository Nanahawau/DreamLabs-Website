import React from 'react';
import Header from '../../components/header/Header';
import styles from './home.module.scss';
import Hero from '../../components/hero/Hero';
import Elllipse from '../../components/ellipse/Elllipse';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Elllipse />
    </div>
  );
};

export default Home;
