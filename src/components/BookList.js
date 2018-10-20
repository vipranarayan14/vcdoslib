import React from 'react';
import PropTypes from 'prop-types';

import './BookList.css';

export const BookList = ({searchResults}) => !!searchResults.length && (

  <div className="BookList">
    <table>
      <tbody>
        {
          searchResults.map((row, i) => (
            <tr
              className={"book" + (
                row['RackNo'] === 'R-0-Z'
                  ? " missing"
                  : ""
              )}
              key={i}>
              <td>
                {!!row['AccesionNo'] && <div className="accno">{row['AccesionNo']}</div>}
              </td>
              <td>
                <div className="title">{row['BookTitle']}</div>
                {!!row['Author'] && <div className="author">by {row['Author']}</div>}
              </td>
              <td>
                {(!!row['RackNo'] && row['RackNo'] !== 'R-0-Z') && <div className="rack">{row['RackNo']}</div>}
                {!!row['Classification'] && <div className="subject">{row['Classification']}</div>}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  searchResults: PropTypes.array.isRequired
}
