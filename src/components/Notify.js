import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notify.module.css';

export const Notify = ({ msg }) => <div className={styles.Notify}>{msg}</div>;

Notify.propTypes = {
  msg: PropTypes.string.isRequired
};
