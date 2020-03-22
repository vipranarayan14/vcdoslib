import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import { rackList } from '../utils/rack-list';

import styles from './List.module.css';

export const RackList = () => {
  const match = useRouteMatch();

  return (
    <div className={styles.List}>
      <h3>Browse by Rack</h3>

      {Object.entries(rackList).map(([num, { title, desc }], id) => (
        <Link to={`${match.url}/${num}`} key={id}>
          <Card className={styles.item}>
            <div className={styles.col15}>
              <div className={styles.num}>{num}</div>
            </div>

            <div className={styles.col85}>
              <div className={styles.title}>{title}</div>

              <div className={styles.desc}>{desc}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
