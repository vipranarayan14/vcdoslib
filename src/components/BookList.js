import React from 'react';
import PropTypes from 'prop-types';

import './BookList.css';

export const BookList = ({books}) => (

  <div className="booklist">
    {
      books
        ? books.map((row, i) => (
          <div className="row" key={i}>
            <span className="accno">{row['Accesion No.']}</span>
            <span className="title">{row['Book Title']}</span>
            <span className="author">{row['Author']}</span>
            <span className="rack">{row['Rack No.']}</span>
            <span className="subject">{row['Classification']}</span>
          </div>
        ))
        : null
    }
  </div>

);

BookList.propTypes = {
  books: PropTypes.array.isRequired
}
