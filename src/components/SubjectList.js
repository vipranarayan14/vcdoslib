import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './List.module.css';

import { subjectList } from '../utils/subject-list';
import { List, Item } from './List';

export const SubjectList = () => {
  const match = useRouteMatch();

  return (
    <div className={styles.List}>
      <h3>Browse by Subject</h3>

      <List>
        {Object.entries(subjectList).map(([num, title], id) => (
          <Item
            num={num}
            title={title}
            link={`${match.url}/${num}`}
            key={id}
          ></Item>
        ))}
      </List>
    </div>
  );
};
