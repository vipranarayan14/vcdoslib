import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

export const SearchBox = ({ handleSubmit }) => (
  <div className="SearchBox">
    <form onSubmit={handleSubmit}>
      <span className="search-input">
        <input name="search" type="search" autoFocus />
      </span>
      <span className="search-submit">
        <input type="submit" value="Search" />
      </span>
    </form>
  </div>
);

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
