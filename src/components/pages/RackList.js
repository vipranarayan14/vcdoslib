import React from 'react';
import PropTypes from 'prop-types';

import { List, Item } from '../blocks/List';

import { rackList } from '../../utils/rack-list';

export const RackList = ({ match }) => (
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

RackList.propTypes = {
  match: PropTypes.object.isRequired
};
