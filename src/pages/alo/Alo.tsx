import React from 'react';
import styles from './alo.module.scss';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import TopBanner from '../../components/topBanner/TopBanner';
import Mission from '../../components/mission/Mission';
import SingleDescriptionBanner from '../../components/singleDescriptionBanner/singleDescriptionBanner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

const Alo = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title title="Alo" subtitle="BRAND IDENTITY (DIGITAL MEDIA, PRINT)" />
      <TopBanner
        heroImg="/images/alo_hero.svg"
        mainText="For hot babes, by hot babes"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/alo_cover.svg"
        imgTwo="/images/alo_track.svg"
      />
      <Mission text="Brand identity for the third edition of Zikoko HER’s annual party" />
      <SingleDescriptionBanner
        heroImg="/images/alo_ad.svg"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/image.svg"
        imgTwo="/images/image_80.svg"
      />
      <Mission text="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed" />
      <Gallery
        topImgOne="/images/alo_gallthree.svg"
        topImgTwo="/images/alogalltwo.svg"
        bottomImg="/images/alo_gallOne.svg"
      />
      <div className={styles.alo_frame}>
        <img src="/images/alo_framed.svg" alt="alo_framed" />
      </div>
      <Footer />
    </div>
  );
};

export default Alo;
