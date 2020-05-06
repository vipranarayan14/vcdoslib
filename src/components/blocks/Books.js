import React from 'react';
import PropTypes from 'prop-types';

import { Book } from './Book';
import { Notify } from './Notify';

export const Books = ({ list, isLoadingBooks }) =>
  isLoadingBooks ? (
    <Notify msg="Loading books..." />
  ) : (
    Boolean(list.length) && (
      <div className="Books">
        {list.map((details, i) => (
          <Book {...details} key={i} />
        ))}
      </div>
    )
  );

Books.propTypes = {
  list: PropTypes.array.isRequired,
  isLoadingBooks: PropTypes.bool
};
