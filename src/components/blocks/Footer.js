import React from 'react';

import { GithubIcon } from '../icons/GithubIcon';

import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.Footer}>
    Copyright © 2020, Prasanna Venkatesh T S ｜{' '}
    <a href="https://github.com/vipranarayan14/vcdoslib">
      <GithubIcon className={styles.GithubIcon} />
    </a>
  </footer>
);
