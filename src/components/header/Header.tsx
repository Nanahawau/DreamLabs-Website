import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img src="./images/3.png" alt="dreamlabs_logo" className={styles.logo} />
      </div>

      <ul className={styles.navlist}>
        <li>
          <a>WORK</a>
        </li>
        <li>
          <a>ABOUT</a>
        </li>
        <li>
          <a>CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
