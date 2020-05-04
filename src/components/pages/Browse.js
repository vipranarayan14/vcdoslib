import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from '../blocks/Card';

import styles from './Browse.module.css';

export const Browse = () => {
  const match = useRouteMatch();

  return (
    <div className={styles.Browse}>
      <Link to={`${match.url}/racks`}>
        <Card className={styles.Card}>By Rack</Card>
      </Link>

      <Link to={`${match.url}/subjects`}>
        <Card className={styles.Card}> By Subject</Card>
      </Link>

      {/* <Link to={`${match.url}/authors`}>
        <Card className={styles.Card}>By Author</Card>
      </Link>

      <Link to={`${match.url}/titles`}>
        <Card className={styles.Card}>By Title</Card>
      </Link> */}
    </div>
  );
};
