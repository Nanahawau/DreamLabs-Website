import React from 'react';
import styles from './evos.module.scss';
import Header from '../../components/header/Header';
import Mission from '../../components/mission/Mission';
import Title from '../../components/title/Title';
import TopBanner from '../../components/topBanner/TopBanner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

const Evos = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title title="Evos" subtitle="BRAND IDENTITY (DIGITAL MEDIA, PRINT)" />
      <TopBanner
        heroImg="/images/for_hot_babes.svg"
        mainText="For hot babes, by hot babes"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/evos.svg"
        imgTwo="/images/hoodie.svg"
      />
      <Mission text="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed" />
      <TopBanner
        heroImg="/images/Empea.svg"
        mainText="For hot babes, by hot babes"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/empea_cup.svg"
        imgTwo="/images/empea_cap.svg"
      />
      <div className={styles.evos_cards}>
        <div className={styles.img_container}>
          <img src="/images/evoscard1.svg" alt="image" />
        </div>
        <div className={styles.img_container}>
          <img src="/images/evoscard2.svg" alt="image" />
        </div>
      </div>
      <Gallery
        topImgOne="/images/business_card.svg"
        topImgTwo="/images/empea_gallery.svg"
        bottomImg="/images/evos_p.svg"
      />
      <Footer />
    </div>
  );
};

export default Evos;
