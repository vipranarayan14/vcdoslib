import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

export const Card = ({ children, className }) => (
  <div className={`${className} ${styles.Card}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
