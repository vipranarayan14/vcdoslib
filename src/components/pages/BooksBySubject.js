import React from 'react';
import PropTypes from 'prop-types';

import { sortByTitle } from '../../utils/sort-by-title';

import { Books } from '../blocks/Books';

export const BooksBySubject = ({ books, isLoadingBooks, match }) => {
  const { code } = match.params;

  return (
    <div>
      <h3>Books in Subject: {code} </h3>

      {!isLoadingBooks && (
        <Books
          list={sortByTitle(
            books.filter(book => book['Subject'].startsWith(code))
          )}
        />
      )}
    </div>
  );
};

BooksBySubject.propTypes = {
  allBooks: PropTypes.array.isRequired,
  isLoadingData: PropTypes.bool.isRequired
};
