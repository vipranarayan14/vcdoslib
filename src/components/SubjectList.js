import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import './List.css';

import { subjectList } from '../utils/subject-list';

export const SubjectList = () => {
  const match = useRouteMatch();

  return (
    <div className="List">
      <h3>Browse by Subject</h3>
      {Object.keys(subjectList).map((num, id) => (
        <Link to={`${match.url}/${num}`} key={id}>
          <Card className="Item">
            <div className="col-15">
              <div className="num">{num}</div>
            </div>
            <div className="col-85">
              <div className="title">{subjectList[num]}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
