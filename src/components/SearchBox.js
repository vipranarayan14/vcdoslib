import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getSearchQuery } from '../utils/get-search-query';

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

    const { history } = this.props;

    history.push(`?search=${encodeURIComponent(this.state.query)}`);
  }

  render() {
    return (
      <div className={styles.SearchBox}>
        <form>
          <span className={styles.searchInput}>
            <input
              name="search"
              type="search"
              defaultValue={this.state.query}
              onChange={this.handleChange}
              autoFocus
            />
          </span>
          <span className={styles.searchSubmit}>
            <input type="submit" value="Search" onClick={this.handleSubmit} />
          </span>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
