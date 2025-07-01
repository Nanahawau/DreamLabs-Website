import React, { useState } from 'react';
import styles from './AboutProfile.module.scss';

const profiles = [
  {
    id: 'busayo',
    name: 'Busayo Oladejo'
  },
  {
    id: 'celeste',
    name: 'Celeste Ojatula'
  },
  {
    id: 'ifoghale',
    name: 'Ifoghale Eguwe'
  },
  {
    id: 'nana',
    name: 'Nana Adeku'
  }
];

const images: any = {
  busayo: {
    img: '/images/busayo.jpg',
    caption: 'Head of Product'
  },
  celeste: {
    img: '/images/celeste.png',
    caption: 'Head of Design'
  },
  ifoghale: {
    img: '/images/ifoghale.jpg',
    caption: 'Head of Communications'
  },
  nana: {
    img: '/images/nana.jpg',
    caption: 'Head of Engineering'
  }
};
const AboutProfile = () => {
  const [selectedId, setSelectedId] = useState(profiles[0]?.id || null);

  return (
    <div className={styles.container}>
      <ul>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={styles.profile}
            onClick={() => setSelectedId(profile.id)}>
            <li
              className={
                selectedId === profile.id
                  ? `${styles.profile_name} ${styles.active}`
                  : styles.profile_name
              }>
              {profile.name}
            </li>
          </div>
        ))}
      </ul>
      {selectedId && images[selectedId] && (
        <figure className={styles.logo_container}>
          <img
            className={styles.logo}
            src={images[selectedId].img}
            alt={images[selectedId].caption}></img>
          <figcaption className={styles.img_caption}>{images[selectedId].caption}</figcaption>
        </figure>
      )}
    </div>
  );
};

export default AboutProfile;
