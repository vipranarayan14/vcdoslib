import React from 'react';
import PropTypes from 'prop-types';

import { Books } from './Books';
import { Notify } from './Notify';
import { ResultStats } from './ResultStats';

import { useParams } from 'react-router-dom';

const getSearchResults = (query, fuse) => {
  if (query) {
    const fuseResults = fuse.search(query);

    const partialMatchScore = 0.05;

    const firstPartialMatchIndex = fuseResults.findIndex(
      result => result.score > partialMatchScore
    );

    /* using `firstPartialMatchIndex` directly will not give unexpected results. Tested! */
    const exactMatches = fuseResults.slice(0, firstPartialMatchIndex);

    /* Array.slice() will extract till the end if end is not specified. */
    const partialMatches = fuseResults.slice(firstPartialMatchIndex);

    const searchResults = {
      exactMatches,
      partialMatches
    };

    return searchResults;
  }
};

export const Results = ({ isLoadingData, isHomepage, fuse, squery }) => {
  const { query = '' } = useParams();

  if (!isLoadingData) {
    const searchResults = getSearchResults(query, fuse);

    return searchResults.partialMatches.length ? (
      <div className="Results">
        <ResultStats searchResults={searchResults} />

        <Books list={searchResults.exactMatches.map(match => match.item)} />

        <p>Did you mean...</p>
        <Books list={searchResults.partialMatches.map(match => match.item)} />
      </div>
    ) : (
      !isHomepage && !isLoadingData && <Notify msg="No Results Found!" />
    );
  } else {
    return null;
  }
};

Results.propTypes = {
  // searchResults: PropTypes.object.isRequired,
  isLoadingData: PropTypes.bool.isRequired,
  isHomepage: PropTypes.bool.isRequired
};
