import React from 'react';

import styles from './Logo.module.css';

import logo from './../logo.svg';

export const Logo = () => <img className={styles.Logo} src={logo} alt="Logo" />;
