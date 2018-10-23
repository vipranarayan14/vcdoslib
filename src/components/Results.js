import React from 'react';
import PropTypes from 'prop-types';

import {ResultBox} from './ResultBox';
import {ResultStats} from './ResultStats';

import './Results.css';

export const Results = ({searchResults}) => Boolean(searchResults.partialMatches.length) && (

  <div className="Results">
    <ResultStats searchResults={searchResults}/>

    <ResultBox searchResults={searchResults.exactMatches}/>

    <p>Did you mean...</p>
    <ResultBox searchResults={searchResults.partialMatches}/>
  </div>

);

Results.propTypes = {
  searchResults: PropTypes.object.isRequired
}
