import React from 'react';
import PropTypes from 'prop-types';

import { Books } from './Books';
import { Notify } from './Notify';
import { ResultStats } from './ResultStats';

export const Results = ({ searchResults, isLoadingData, isHomepage }) =>
  searchResults.partialMatches.length ? (
    <div className="Results">
      <ResultStats searchResults={searchResults} />

      <Books list={searchResults.exactMatches.map(match => match.item)} />

      <p>Did you mean...</p>
      <Books list={searchResults.partialMatches.map(match => match.item)} />
    </div>
  ) : (
    !isHomepage && !isLoadingData && <Notify msg="No Results Found!" />
  );

Results.propTypes = {
  searchResults: PropTypes.object.isRequired,
  isLoadingData: PropTypes.bool.isRequired,
  isHomepage: PropTypes.bool.isRequired
};
