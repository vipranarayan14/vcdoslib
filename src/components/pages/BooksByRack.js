import React from 'react';
import PropTypes from 'prop-types';

import { sortByTitle } from '../../utils/sort-by-title';

import { Books } from '../blocks/Books';
import { Notify } from '../blocks/Notify';

const filterBooksByRack = (num, books) =>
  books.filter(book =>
    book['Rack']
      .replace(/\s/g, '')
      .split(',')
      .includes(num)
  );

export const BooksByRack = ({ books, isLoadingBooks, match }) => {
  const { num } = match.params;

  const booksInRack = filterBooksByRack(num, books);

  return (
    <div>
      <h3>Books in Rack: {num}</h3>

      {!isLoadingBooks &&
        (Boolean(booksInRack.length) ? (
          <Books list={sortByTitle(booksInRack)} />
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
