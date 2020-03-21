import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

import { useHistory, useParams } from 'react-router-dom';

export const SearchBox = ({ searchQuery, handleChange, handleSubmit }) => {
  const history = useHistory();
  const params = useParams();
  const queryFromRoute = params.query ? decodeURIComponent(params.query) : '';

  return (
    <div className="SearchBox">
      <form>
        <span className="search-input">
          <input
            name="search"
            type="search"
            defaultValue={queryFromRoute}
            onChange={handleChange}
            autoFocus
          />
        </span>
        <span className="search-submit">
          <input
            type="submit"
            value="Search"
            onClick={e => {
              history.push(`/search/${encodeURIComponent(searchQuery)}`);
              handleSubmit(e);
            }}
          />
        </span>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};
