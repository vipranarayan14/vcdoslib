import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getSearchQuery } from '../../utils/get-search-query';

import { SearchIcon } from '../icons/SearchIcon';

import styles from './SearchBox.module.css';

export class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const query = getSearchQuery(this.props.location.search);

    if (query) {
      this.setState({
        query: decodeURIComponent(query)
      });
    }
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { query } = this.state;

    if (query) {
      this.props.history.push(`?search=${encodeURIComponent(query)}`);
    }
  }

  render() {
    return (
      <div className={styles.SearchBox}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchInput}
            type="search"
            name="search"
            defaultValue={this.state.query}
            onChange={this.handleChange}
            autoFocus
          />
          <button
            className={styles.searchSubmit}
            type="submit"
            name="submit"
            onClick={this.handleSubmit}
          >
            <SearchIcon className={styles.SearchIcon} />
          </button>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
