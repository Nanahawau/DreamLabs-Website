import React from 'react';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import TopBanner from '../../components/topBanner/TopBanner';
import Mission from '../../components/mission/Mission';
import styles from './hertitude.module.scss';
import SingleDescriptionBanner from '../../components/singleDescriptionBanner/singleDescriptionBanner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

const Hertitude = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Title title="Hertitude 2024" subtitle="BRAND IDENTITY (DIGITAL MEDIA, PRINT)" />
      <TopBanner
        heroImg="/images/For-hot-babes-only.webp"
        mainText="For hot babes, by hot babes"
        subText="The team designed an identity that calls back to the energies of a good day: hopeful sunrise, electric noon and a romantic evening. Making sure not to miss out on pop culture references, the illustration style stood out amongst a sea of the expected."
        imgOne="/images/hertitude_logo.svg"
        imgTwo="/images/puwb.svg"
        pageName="hertitude"
      />
      <Mission text="Brand identity for the third edition of Zikoko HER’s annual party" />
      <SingleDescriptionBanner
        heroImg="/images/group.svg"
        subText="The team designed an identity that calls back to the energies of a good day: hopeful sunrise, electric noon and a romantic evening. Making sure not to miss out on pop culture references, the illustration style stood out amongst a sea of the expected."
        imgOne="/images/hertitude_logo.svg"
        imgTwo="/images/puwb.svg"
        pageName="hertitude"
      />
      <div className={styles.sunglasses_img}>
        <img src="images/sunglasses.svg" alt="image" />
      </div>
      <Gallery
        topImgOne="/images/hertitude_imgone.svg"
        topImgTwo="/images/hertitude_imgtwo.svg"
        bottomImg="/images/hertitude_btm.svg"
        pageName="hertitude"
      />
      <Footer />
    </div>
  );
};

export default Hertitude;
