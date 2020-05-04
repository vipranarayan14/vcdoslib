import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getSearchQuery } from '../utils/get-search-query';
import { initFuse } from '../utils/init-fuse';
import { loadBooks } from '../utils/load-books';

import { Books } from './Books';
import { Notify } from './Notify';
import { ResultStats } from './ResultStats';

import styles from './Results.module.css';

const compareTitle = (a, b) => {
  const articlesRegex = /^(a|an|the)\s+/i;

  const aTitle = a['Title'].replace(articlesRegex, '');
  const bTitle = b['Title'].replace(articlesRegex, '');

  if (aTitle < bTitle) {
    return -1;
  }
  if (aTitle > bTitle) {
    return 1;
  }
  return 0;
};

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

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingBooks: true,
      showPartialMatches: false
    };

    this.allBooks = [];
    this.fuse = {};

    this.logError = console.error; //eslint-disable-line no-console

    this.handleShowPartialMatchesClick = this.handleShowPartialMatchesClick.bind(
      this
    );
  }

  componentDidMount() {
    loadBooks()
      .then(({ data }) => {
        this.allBooks = data;

        this.fuse = initFuse(this.allBooks);
        this.setState({
          isLoadingBooks: false
        });
      })
      .catch(this.logError);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter) {
      return;
    }

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
    if (this.state.isLoadingBooks) {
      return <Notify msg="Loading books..." />;
    }

    const { filter } = this.props;

    if (filter) {
      return <Books list={this.allBooks.filter(filter).sort(compareTitle)} />;
    }

    const query = getSearchQuery(this.props.location.search);

    if (!query) {
      return null;
    }

    const searchResults = getSearchResults(query, this.fuse);

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
  filter: PropTypes.func,
  location: PropTypes.object.isRequired
};
