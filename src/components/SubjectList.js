import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import styles from './List.module.css';

import { subjectList } from '../utils/subject-list';

export const SubjectList = () => {
  const match = useRouteMatch();

  return (
    <div className={styles.List}>
      <h3>Browse by Subject</h3>

      {Object.keys(subjectList).map((num, id) => (
        <Link to={`${match.url}/${num}`} key={id}>
          <Card className={styles.item}>
            <div className={styles.col15}>
              <div className={styles.num}>{num}</div>
            </div>

            <div className={styles.col85}>
              <div className={styles.title}>{subjectList[num]}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
