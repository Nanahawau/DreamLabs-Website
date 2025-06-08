import React from 'react';
import Header from '../../components/header/Header';
import styles from './home.module.scss';
import Hero from '../../components/hero/Hero';
import Elllipse from '../../components/ellipse/Elllipse';
import Carousel from '../../components/slider/Carousel';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Elllipse />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
