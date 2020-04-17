import React from 'react';

import styles from './icons.module.css';

export const SearchIcon = ({ className }) => (
  <svg
    className={`${styles.Icons} ${styles.SearchIcon} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <circle cx="24" cy="24" r="22" fill="transparent" stroke-width="3" />
    <rect
      x="43"
      y="27"
      width="30"
      height="10"
      rx="2"
      ry="2"
      transform="rotate(45 32 32)"
    />
  </svg>
);

export const GithubIcon = () => (
  <svg
    className={`${styles.Icons} ${styles.GithubIcon}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      d="M7.5 1C3.9 1 1 3.9 1 7.5 1 10.4 2.9 12.8 5.4 
        13.6 5.8 13.7 6 13.4 6 13.1 6 13 6 12.8 6 12.3 4.2 12.6
        3.6 11.4 3.6 11.4 3.3 10.6 3 10.4 3 10.4 2.4 10 3 10 3
        10 3.7 10.1 4 10.6 4 10.6 4.5 11.5 5.6 11.4 6 11.3 6
        10.9 6 10.6 6.2 10.4 4.1 10 3 8.8 3 7.2 3 6.2 3.3 5.5
        3.9 4.9 3.6 4.6 3.5 3.6 4 3 5.2 3 5.9 3.9 5.9 3.9 5.9
        3.9 6.5 3.6 7.5 3.6 8.5 3.6 9.1 3.9 9.1 3.9 9.1 3.9 9.8
        3 11 3 11.5 3.6 11.4 4.6 11.2 4.9 11.7 5.5 12 6.2 12 7.2
        12 8.8 10.9 10 8.9 10.4 9 10.6 9 10.8 9 11.3 9 12.1 9
        12.9 9 13.1 9 13.4 9.2 13.7 9.6 13.6 12.1 12.8 14 10.4
        14 7.5 14 3.9 11.1 1 7.5 1Z"
    />
  </svg>
);
