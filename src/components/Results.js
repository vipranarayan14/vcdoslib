import React from 'react';
import PropTypes from 'prop-types';

import {subjects} from './subjects';

import './Results.css';

const markMissing = rack => rack === 'NA'
  ? ' missing'
  : '';

export const Results = ({searchResults}) => !!searchResults.length && (

  <div className="Results">
    <table>
      <tbody>
        {
          searchResults.map((row, i) => {

            const accno = row['AccesionNo'];
            const title = row['BookTitle'];
            const author = row['Author'];
            const subject = row['Classification'];
            const rack = row['RackNo'];

            return (
              <tr className={"book" + markMissing(row['RackNo'])} key={i}>
                <td>
                  {!!accno && <div className="accno">{accno}</div>}
                </td>
                <td>
                  <div className="title">{title}</div>
                  {!!author && <div className="author">by {author}</div>}
                  {!!subject && <div className="subject">{`${subjects[subject]} (${subject})`}</div>}
                </td>
                <td>
                  <div className="rack">{rack}</div>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  </div>
);

Results.propTypes = {
  searchResults: PropTypes.array.isRequired
}
