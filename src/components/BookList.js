import React from 'react';
import PropTypes from 'prop-types';

import './BookList.css';

export const BookList = ({searchResults}) => !!searchResults.length && (

  <div className="booklist">
    {
      searchResults.map((row, i) => (
        <div className="row" key={i}>
          <span className="accno">{row['AccesionNo']}</span>
          <span className="title">{row['BookTitle']}</span>
          <span className="author">{row['Author']}</span>
          <span className="rack">{row['RackNo']}</span>
          <span className="subject">{row['Classification']}</span>
        </div>
      ))
    }
  </div>

);

BookList.propTypes = {
  searchResults: PropTypes.array.isRequired
}
