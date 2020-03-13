import React from 'react';
import PropTypes from 'prop-types';

import { ResultBox } from './ResultBox';
import { ResultStats } from './ResultStats';

import './Results.css';

export const Results = ({ searchResults, isLoadingData, isHomepage }) =>
  searchResults.partialMatches.length ? (
    <div className="Results">
      <ResultStats searchResults={searchResults} />

      <ResultBox searchResults={searchResults.exactMatches} />

      <p>Did you mean...</p>
      <ResultBox searchResults={searchResults.partialMatches} />
    </div>
  ) : (
    !isHomepage && !isLoadingData && <div className="Results not-found">No Results Found!</div>
  );

Results.propTypes = {
  searchResults: PropTypes.object.isRequired,
  isLoadingData: PropTypes.bool.isRequired,
  isHomepage: PropTypes.bool.isRequired
};
