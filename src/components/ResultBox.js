import React from 'react';
import PropTypes from 'prop-types';

import {subjects} from './subjects';

const markMissing = rack => rack === 'NA'
  ? ' missing'
  : '';

export const ResultBox = ({searchResults}) => Boolean(searchResults.length) && (

  <div className="ResultBox">
    <table>
      <tbody>
        {
          searchResults.map((result, i) => {

            const accno = result.item['AccesionNo'];
            const title = result.item['BookTitle'];
            const author = result.item['Author'];
            const subject = result.item['Classification'];
            const rack = result.item['RackNo'];

            return (
              <tr className={"book" + markMissing(rack)} key={i}>
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
ResultBox.propTypes = {
  searchResults: PropTypes.array.isRequired
};
