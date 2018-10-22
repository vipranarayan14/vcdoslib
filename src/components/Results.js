import React from 'react';
import PropTypes from 'prop-types';

import './Results.css';

export const Results = ({searchResults}) => !!searchResults.length && (

  <div className="Results">
    <table>
      <tbody>
        {
          searchResults.map((row, i) => (
            <tr
              className={"book" + (
                row['RackNo'] === 'NA'
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
              {!!row['Classification'] && <div className="subject">{row['Classification']}</div>}
                <div className="rack">{row['RackNo']}</div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

Results.propTypes = {
  searchResults: PropTypes.array.isRequired
}
