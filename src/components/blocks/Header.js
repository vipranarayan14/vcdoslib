import React from 'react';
import { Route } from 'react-router-dom';

import { Logo } from '../icons/Logo';
import { Nav } from './Nav';
import { SearchBox } from './SearchBox';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.Header}>
    <div>
      <h1>
        <Logo className={styles.Logo} /> Library
      </h1>

      <h2>
        Department of Sanskrit, <br />
        RKM Vivekananda College
      </h2>

      <Route exact path="/" component={props => <SearchBox {...props} />} />

      <Nav />
    </div>
  </header>
);
