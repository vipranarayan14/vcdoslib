import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Books } from './Books';

import { sortByTitle } from './../modules/sort-by-title';

export const BooksBySubject = ({ allBooks }) => {
  const { code } = useParams();

  return (
    <Books
      list={sortByTitle(
        allBooks.filter(book => book['Classification'].startsWith(code))
      )}
    />
  );
};

BooksBySubject.propTypes = {
  allBooks: PropTypes.array.isRequired
};
