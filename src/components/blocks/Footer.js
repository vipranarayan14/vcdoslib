import React from 'react';

import { GithubIcon } from '../icons/icons';

import styles from './Footer.module.css';

export const Footer = () => (
  <footer class={styles.Footer}>
    Copyright © 2020, Prasanna Venkatesh T S ｜{' '}
    <a href="https://github.com/vipranarayan14/vcdoslib">
      <GithubIcon />
    </a>
  </footer>
);
