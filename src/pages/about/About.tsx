import React from 'react';
import AboutText from '../../components/abouttext/AboutText';
import AboutProfile from '../../components/aboutprofile/AboutProfile';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './About.module.scss';
const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AboutText />
      <AboutProfile />
      <Footer />
    </div>
  );
};

export default About;
