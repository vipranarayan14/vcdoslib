import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { List, Item } from './List';

import { rackList } from '../utils/rack-list';

export const RackList = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h3>Browse by Rack</h3>

      <List>
        {Object.entries(rackList).map(([num, { title, desc }], id) => (
          <Item
            num={num}
            title={title}
            desc={desc}
            link={`${match.url}/${num}`}
            key={id}
          />
        ))}
      </List>
    </div>
  );
};
