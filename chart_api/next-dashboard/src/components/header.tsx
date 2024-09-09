import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Application</div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/about">About</a></li>
          <li className={styles.navItem}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
