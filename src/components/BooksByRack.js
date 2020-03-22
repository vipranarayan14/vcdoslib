import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Books } from './Books';

import { sortByTitle } from './../utils/sort-by-title';
import { Notify } from './Notify';

const filterBooksByRack = (rack, books) =>
  books.filter(book =>
    book['RackNo']
      .replace(/\s/g, '')
      .split(',')
      .includes(rack)
  );

export const BooksByRack = ({ allBooks, isLoadingData }) => {
  const { rack } = useParams();

  const booksInRack = filterBooksByRack(rack, allBooks);

  return (
    <div>
      <h3>Books in Rack: {rack} </h3>

      {!isLoadingData &&
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
