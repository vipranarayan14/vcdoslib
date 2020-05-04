import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Books } from '../blocks/Books';

import { sortByTitle } from '../../utils/sort-by-title';

export const BooksBySubject = ({ books, isLoadingBooks }) => {
  const { code } = useParams();

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
