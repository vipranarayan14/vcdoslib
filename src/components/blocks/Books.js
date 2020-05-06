import React from 'react';
import PropTypes from 'prop-types';

import { Book } from './Book';

export const Books = ({ list }) =>
  Boolean(list.length) && (
    <div className="Books">
      {list.map((details, i) => (
        <Book {...details} key={i} />
      ))}
    </div>
  );

Books.propTypes = {
  list: PropTypes.array.isRequired
};
