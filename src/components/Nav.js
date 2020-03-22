import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

export const Nav = () => (
  <nav className={styles.Nav}>
    <NavLink
      to="/search"
      className={styles.NavLink}
      activeClassName={styles.active}
    >
      Search
    </NavLink>
    <NavLink
      to="/browse"
      className={styles.NavLink}
      activeClassName={styles.active}
    >
      Browse
    </NavLink>
  </nav>
);
