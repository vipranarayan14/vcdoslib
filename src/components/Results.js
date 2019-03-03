import React from 'react';
import PropTypes from 'prop-types';

import { ResultBox } from './ResultBox';
import { ResultStats } from './ResultStats';

import './Results.css';

export const Results = ({ searchResults, isHomepage }) =>
  searchResults.partialMatches.length ? (
    <div className="Results">
      <ResultStats searchResults={searchResults} />

      <ResultBox searchResults={searchResults.exactMatches} />

      <p>Did you mean...</p>
      <ResultBox searchResults={searchResults.partialMatches} />
    </div>
  ) : (
    !isHomepage && <div className="Results not-found">No Results Found!</div>
  );

Results.propTypes = {
  searchResults: PropTypes.object.isRequired,
  isHomepage: PropTypes.bool.isRequired
};
