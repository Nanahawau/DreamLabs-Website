import React from 'react';
import styles from './layout.module.scss';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';

const pageData: Record<
  string,
  {
    title: string;
    subtitle: string;
    heroImg: string;
    description: {
      main: string;
      sub: string;
    };
    media: {
      mediaOne: string;
      mediaTwo: string;
    };
    motive: string;
    brandLogo: string;
    // logoDesc: string;
    // merch: {
    //   merch1: string;
    //   merch2?: string;
    // };
  }
> = {
  1: {
    title: 'Hertitude 2024',
    subtitle: 'BRAND IDENTITY (DIGITAL MEDIA, PRINT)',
    heroImg: '/images/for_hot_babes.svg',
    description: {
      main: 'For hot babes, by hot babes',
      sub: 'The team designed an identity that calls back to the energies of a good day: hopeful sunrise, electric noon and a romantic evening. Making sure not to miss out on pop culture references, the illustration style stood out amongst a sea of the expected.'
    },
    media: {
      mediaOne: '/images/hertitude_logo.svg',
      mediaTwo: '/images/puwb.svg'
    },
    motive: 'Brand identity for the third edition of Zikoko HER’s annual party',
    brandLogo: '/images/'
  },
  2: {
    title: 'MAVIN @ 10',
    subtitle: 'BRAND IDENTITY (DIGITAL MEDIA, PRINT)',
    heroImg: '/images/page1.jpg',
    description: {
      main: 'MAVIN’s 10 year anniversary',
      sub: 'The result of a close collaboration between the ambitious people at Mavin and the Dream Labs team, Mavin’s 10th year official logo is self-assured. It hasn’t been easy after all, though we’ve made it seem so.'
    },
    media: {
      mediaOne: '',
      mediaTwo: ''
    },
    motive: 'Brand identity for the third edition of Zikoko HER’s annual party',
    brandLogo: '/images/'
  },
  3: {
    title: 'Evos',
    subtitle: 'BRAND IDENTITY (DIGITAL MEDIA, PRINT)',
    heroImg: '/images/page1.jpg',
    description: {
      main: 'For hot babes, by hot babes',
      sub: 'We’re an independent group of designers, ​builders, writers, and entrepreneurs obsessed with ​launching and growing brands. We work hard to ​toe a fine line between technology and art, ​pushing businesses into their best selves.  Our ​work covers branding, content strategy, and ​software development.'
    },
    media: {
      mediaOne: '',
      mediaTwo: ''
    },
    motive: 'Brand identity for the third edition of Zikoko HER’s annual party',
    brandLogo: '/images/'
  }
};

const Layout = () => {
  const { id } = useParams<{ id: string }>();

  const page = id ? pageData[id] : undefined;

  if (!page) {
    return <h1>404 - Page Not Found</h1>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{page.title}</p>
        <p className={styles.sub_title}>{page.subtitle}</p>
      </div>
      <div className={styles.main_content}>
        <div className={styles.img_container}>
          <img src={page.heroImg} alt="banner" className={styles.img} />
        </div>
        <div className={styles.description}>
          <div className={styles.description_text}>
            <p className={styles.main}>{page.description.main}</p>
            <p className={styles.sub}>{page.description.sub}</p>
          </div>

          <div className={styles.media}>
            <img src={page.media.mediaOne} alt="picture" />
            <img src={page.media.mediaTwo} alt="picture" />
          </div>
        </div>
      </div>

      <p>{page.motive}</p>

      <div className={styles.second_main_content}></div>
    </div>
  );
};

export default Layout;
