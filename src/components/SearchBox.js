import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

export const SearchBox = ({handleSubmit}) => (

  <div className="SearchBox">
    <form onSubmit={handleSubmit}>
      <input name="search" type="search" autoFocus/>
      <input type="submit" value="Search"/>
    </form>
  </div>

);

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}
