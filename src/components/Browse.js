import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import './List.css';

export const Browse = () => {
  const match = useRouteMatch();

  return (
    <div className="List">
      <Link to={`${match.url}/racks`}>
        <Card>By Rack</Card>
      </Link>

      <Link to={`${match.url}/subjects`}>
        <Card> By Subject</Card>
      </Link>

      <Link to={`${match.url}/authors`}>
        <Card>By Author</Card>
      </Link>

      <Link to={`${match.url}/titles`}>
        <Card>By Title</Card>
      </Link>
    </div>
  );
};
