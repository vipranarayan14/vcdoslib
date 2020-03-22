import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResultStats.module.css';

export const ResultStats = ({ searchResults }) => {
  const totalExactMatches = searchResults.exactMatches.length;
  const totalPartialMatches = searchResults.partialMatches.length;

  return (
    <div className={styles.ResultStats}>
      <span>
        Found&nbsp;{totalExactMatches || 'no'}
        &nbsp;exact match{totalExactMatches > 1 && 'es'}
        &nbsp;{totalExactMatches < 1 ? 'but' : 'and'}
      </span>
      <span>
        &nbsp;{totalPartialMatches}
        &nbsp;partial match{totalPartialMatches > 1 && 'es'}.
      </span>
    </div>
  );
};

ResultStats.propTypes = {
  searchResults: PropTypes.object.isRequired
};
