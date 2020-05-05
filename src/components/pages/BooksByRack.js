import React from 'react';
import PropTypes from 'prop-types';

import { sortByTitle } from '../../utils/sort-by-title';

import { Books } from '../blocks/Books';
import { Notify } from '../blocks/Notify';

const filterBooksByRack = (rack, books) =>
  books.filter(book =>
    book['Rack']
      .replace(/\s/g, '')
      .split(',')
      .includes(rack)
  );

export const BooksByRack = ({ books, isLoadingBooks, match }) => {
  const { rack } = match.params;

  const booksInRack = filterBooksByRack(rack, books);

  return (
    <div>
      <h3>Books in Rack: {rack} </h3>

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
  allBooks: PropTypes.array.isRequired,
  isLoadingData: PropTypes.bool.isRequired
};
