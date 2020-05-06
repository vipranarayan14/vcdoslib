import React from 'react';
import PropTypes from 'prop-types';

import { byTitle } from '../../utils/sort';

import { Books } from '../blocks/Books';

const bySubject = code => book => book['Subject'].startsWith(code);

export const BooksBySubject = ({ books, isLoadingBooks, match }) => {
  const { code } = match.params;

  const bookInSubject = books.filter(bySubject(code)).sort(byTitle);

  return (
    <div>
      <h3>Books in Subject: {code}</h3>

      {<Books list={bookInSubject} {...{ isLoadingBooks }} />}
    </div>
  );
};

BooksBySubject.propTypes = {
  books: PropTypes.array.isRequired,
  isLoadingBooks: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};
