import React from 'react';
import PropTypes from 'prop-types';

import './ResultStats.css';

export const ResultStats = ({searchResults}) => {

  const totalExactMatches = searchResults.exactMatches.length;
  const totalPartialMatches = searchResults.partialMatches.length;

  return (

    <div className="ResultStats">
      <span>Found&nbsp;{totalExactMatches || 'no'}
        &nbsp;exact match{
          totalExactMatches > 1
            ? 'es and'
            : ' but'
        }</span>
      <span>&nbsp;{totalPartialMatches}&nbsp;partial match{
          totalExactMatches > 1
            ? 'es'
            : ''
        }.</span>
    </div>

  );

};

ResultStats.propTypes = {
  searchResults: PropTypes.object.isRequired
}
