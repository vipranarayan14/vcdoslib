import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

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
    const { params } = this.props.match;

    const queryFromRoute = params.query ? decodeURIComponent(params.query) : '';

    if (queryFromRoute) {
      this.setState({
        query: queryFromRoute
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

    history.push(`/search/${encodeURIComponent(this.state.query)}`);
  }

  render() {
    return (
      <div className="SearchBox">
        <form>
          <span className="search-input">
            <input
              name="search"
              type="search"
              defaultValue={this.state.query}
              onChange={this.handleChange}
              autoFocus
            />
          </span>
          <span className="search-submit">
            <input type="submit" value="Search" onClick={this.handleSubmit} />
          </span>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
