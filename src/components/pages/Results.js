import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getSearchQuery } from '../../utils/get-search-query';

import { Books } from '../blocks/Books';
import { Notify } from '../blocks/Notify';
import { ResultStats } from '../blocks/ResultStats';

import styles from './Results.module.css';

const getSearchResults = fuse => query => {
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

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPartialMatches: false
    };

    this.handleShowPartialMatchesClick = this.handleShowPartialMatchesClick.bind(
      this
    );

    this.fuse = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.setState({
        showPartialMatches: false
      });
    }
  }

  handleShowPartialMatchesClick() {
    this.setState({
      showPartialMatches: true
    });
  }

  render() {
    if (this.props.isLoadingBooks) {
      return <Notify msg="Loading books..." />;
    }

    const query = getSearchQuery(this.props.location.search);

    if (!query) {
      return null;
    }

    const searchResults = getSearchResults(this.props.fuse)(query);

    if (!searchResults.partialMatches.length) {
      return <Notify msg="No Results Found!" />;
    }

    return (
      <div className={styles.Results}>
        <ResultStats searchResults={searchResults} />

        <Books list={searchResults.exactMatches.map(match => match.item)} />

        {!this.state.showPartialMatches ? (
          <button
            className={styles.showPartialMatchesBtn}
            onClick={this.handleShowPartialMatchesClick}
          >
            Show similar results...
          </button>
        ) : (
          <>
            <h3 className={styles.partialMatchesHeading}>Similar Results</h3>
            <Books
              list={searchResults.partialMatches.map(match => match.item)}
            />
          </>
        )}
      </div>
    );
  }
}

Results.propTypes = {
  fuse: PropTypes.object.isRequired,
  isLoadingBooks: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};
