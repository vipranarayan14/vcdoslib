import React from 'react';
import PropTypes from 'prop-types';

import { byTitle } from '../../utils/sort';

import { Books } from '../blocks/Books';
import { Notify } from '../blocks/Notify';

const byRack = num => book =>
  book['Rack']
    .replace(/\s/g, '')
    .split(',')
    .includes(num);

export const BooksByRack = ({ books, isLoadingBooks, match }) => {
  const { num } = match.params;

  const booksInRack = books.filter(byRack(num)).sort(byTitle);

  return (
    <div>
      <h3>Books in Rack: {num}</h3>

      {!isLoadingBooks &&
        (Boolean(booksInRack.length) ? (
          <Books list={booksInRack} />
        ) : (
          <Notify msg="List not availabe!" />
        ))}
    </div>
  );
};

BooksByRack.propTypes = {
  books: PropTypes.array.isRequired,
  isLoadingBooks: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};
