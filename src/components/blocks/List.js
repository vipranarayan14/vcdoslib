import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { join, iffy } from '../../utils/class-names';

import { Card } from './Card';

import styles from './List.module.css';

export const Item = ({ num, title, desc, link }) => (
  <Link to={link || ''}>
    <Card
      className={join(styles.item, iffy(!desc, styles.extraVerticalPadding))}
    >
      <div className={styles.col15}>
        <div className={styles.num}>{num}</div>
      </div>

      <div className={styles.col85}>
        <div className={styles.title}>{title}</div>

        {desc && <div className={styles.desc}>{desc}</div>}
      </div>
    </Card>
  </Link>
);

export const List = ({ children }) => (
  <div className={styles.List}>{children}</div>
);

Item.propTypes = {
  num: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string
};

List.propTypes = {
  children: PropTypes.node.isRequired
};
