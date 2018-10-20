import React from 'react';
import PropTypes from 'prop-types';

import './ResultStats.css';

export const ResultStats = ({searchResults}) => !!searchResults.length && (

  <div className="ResultStats">
    Found{' '}{searchResults.length}{' '}books.
  </div>

);

ResultStats.propTypes = {
  searchResults: PropTypes.array.isRequired
}
