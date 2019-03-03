import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

export const SearchBox = ({ searchQuery, handleChange, handleSubmit }) => (
  <div className="SearchBox">
    <form onSubmit={handleSubmit}>
      <span className="search-input">
        <input
          name="search"
          type="search"
          defaultValue={searchQuery}
          onChange={handleChange}
          autoFocus
        />
      </span>
      <span className="search-submit">
        <input type="submit" value="Search" />
      </span>
    </form>
  </div>
);

SearchBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};
