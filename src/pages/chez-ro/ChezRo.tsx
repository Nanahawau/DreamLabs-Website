import React from 'react';
import styles from './chezro.module.scss';
import Gallery from '../../components/gallery/Gallery';
import Header from '../../components/header/Header';
import Mission from '../../components/mission/Mission';
import SingleDescriptionBanner from '../../components/singleDescriptionBanner/singleDescriptionBanner';
import Title from '../../components/title/Title';
import TopBanner from '../../components/topBanner/TopBanner';
import Footer from '../../components/footer/Footer';

const ChezRo = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title title="Chez Ro" subtitle="BRAND IDENTITY (DIGITAL MEDIA, PRINT)" />
      <TopBanner
        heroImg="/images/chezro_hero.svg"
        mainText="For hot babes, by hot babes"
        subText="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development."
        imgOne="/images/chezro_brown_box.svg"
        imgTwo="/images/chezro_black_box.svg"
      />
      <Mission text="We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed" />
      <SingleDescriptionBanner
        heroImg="/images/chezro_deliv.svg"
        subText="The team designed an identity that calls back to the energies of a good day: hopeful sunrise, electric noon and a romantic evening. Making sure not to miss out on pop culture references, the illustration style stood out amongst a sea of the expected."
        imgOne="/images/reimagined1.svg"
        imgTwo="/images/reimagined2.svg"
      />
      <div className={styles.img_container}>
        <img src="/images/chezropotrait.svg" alt="image" />
      </div>
      <Gallery
        topImgOne="/images/Chezro_cards_1.svg"
        topImgTwo="/images/chezrocards2.svg"
        bottomImg="/images/chezro_ig.svg"
      />
      <Footer />
    </div>
  );
};

export default ChezRo;
