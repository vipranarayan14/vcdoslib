import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Card } from './Card';

import { rackList } from '../utils/rack-list';

import './List.css';

export const RackList = () => {
  const match = useRouteMatch();

  return (
    <div className="List">
      <h3>Browse by Rack</h3>
      {Object.keys(rackList).map((num, id) => {
        const rackDetails = rackList[num];
        const { title, desc } = rackDetails;
        return (
          <Link to={`${match.url}/${num}`} key={id}>
            <Card className="Item">
              <div className="col-15">
                <div className="num">{num}</div>
              </div>
              <div className="col-85">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
