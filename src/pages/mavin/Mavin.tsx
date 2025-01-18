import React from 'react';
import styles from './Mavin.module.scss';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import TopBanner from '../../components/topBanner/TopBanner';
import Mission from '../../components/mission/Mission';
import Footer from '../../components/footer/Footer';
import SingeDescSingleImgBanner from '../../components/singledescsingleimg/SingleDescSingleImgBanner';

const Mavin = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title title="MAVIN @ 10" subtitle="BRAND IDENTITY (DIGITAL MEDIA, PRINT)" />
      <TopBanner
        heroImg="/images/MAVIN-2.webp"
        mainText="MAVIN’s 10 year anniversary"
        subText="The result of a close collaboration between the ambitious people at Mavin and the Dream Labs team, Mavin’s 10th year official logo is self-assured. It hasn’t been easy after all, though we’ve made it seem so."
        imgOne="/images/mavincuptb.svg"
        imgTwo="/images/mavintbimg.svg"
        pageName="mavin"
      />
      <Mission text="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed" />
      <SingeDescSingleImgBanner
        heroImg="/images/mavin_double.svg"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/mavin_cap.svg"
      />
      <div className={styles.logo_container}>
        <div className={styles.img_container}>
          <img src="images/mavin_page_logo.svg" alt="mavin_logo" />
        </div>
        <div className={styles.img_container}>
          <img src="images/mavin-brand_name.svg" alt="brand_name" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mavin;
