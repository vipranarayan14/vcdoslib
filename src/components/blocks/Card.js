import React from 'react';
import PropTypes from 'prop-types';

import { join } from '../../utils/class-names';

import styles from './Card.module.css';

export const Card = ({ children, className }) => (
  <div className={join(styles.Card, className)}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
