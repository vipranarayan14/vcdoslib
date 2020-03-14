import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import './List.css';

import { subjects } from '../utils/subjects-list';

export const SubjectList = () => {
  const match = useRouteMatch();

  return (
    <div className="List">
      <h2>Browse by Subject</h2>
      {Object.keys(subjects).map((subjectCode, id) => (
        <Link to={`${match.url}/${subjectCode}`} key={id}>
          <Card>
            {subjects[subjectCode]} ({subjectCode})
          </Card>
        </Link>
      ))}
    </div>
  );
};
