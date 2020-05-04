import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Results } from './Results';

export const BooksBySubject = ({ allBooks, isLoadingData }) => {
  const { code } = useParams();

  return (
    <>
      <h3>Books in Subject: {code} </h3>

      <Results filter={book => book['Subject'].startsWith(code)} />
    </>
  );
};

BooksBySubject.propTypes = {
  allBooks: PropTypes.array.isRequired,
  isLoadingData: PropTypes.bool.isRequired
};
