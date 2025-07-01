import React from 'react';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link to="/">
          <img src="./images/3.png" alt="dreamlabs_logo" className={styles.logo} />
        </Link>
      </div>
      <nav>
        <ul className={styles.navlist}>
          {/*<li className={styles.navitem}>*/}
          {/*  <NavLink to="/services" className={styles.navitem}>*/}
          {/*    SERVICES*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          {/*<li className={styles.navitem}>*/}
          {/*  <NavLink to="/work" className={styles.navitem}>*/}
          {/*    WORK*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          <li className={styles.navitem}>
            <NavLink to="/about" className={styles.navitem}>
              ABOUT
            </NavLink>
          </li>
          {/*<li className={styles.navitem}>*/}
          {/*  <NavLink to="/contact" className={styles.navitem}>*/}
          {/*    CONTACT*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
