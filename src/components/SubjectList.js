import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import './List.css';

import { subjectList } from '../utils/subject-list';

export const SubjectList = () => {
  const match = useRouteMatch();

  return (
    <div className="List">
      <h2>Browse by Subject</h2>
      {Object.keys(subjectList).map((subjectCode, id) => (
        <Link to={`${match.url}/${subjectCode}`} key={id}>
          <Card>
            {subjectList[subjectCode]} ({subjectCode})
          </Card>
        </Link>
      ))}
    </div>
  );
};
