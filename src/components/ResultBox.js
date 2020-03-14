import React from 'react';
import PropTypes from 'prop-types';

import { subjects } from '../modules/subjects';
import { Card } from './Card';

const markMissing = rack => (rack === 'NA' ? ' missing' : '');

export const ResultBox = ({ searchResults }) =>
  Boolean(searchResults.length) && (
    <div className="ResultBox">
      {searchResults.map((result, i) => {
        const {
          AccesionNo: accno,
          BookTitle: title,
          Author: author,
          Classification: subject,
          RackNo: rack
        } = result.item;

        return (
          <Card className={'book' + markMissing(rack)} key={i}>
            <div className="col15">
              {!!accno && <div className="accno">{accno}</div>}
            </div>
            <div className="col70">
              <div className="title">{title}</div>
              {!!author && <div className="author">by {author}</div>}
              {!!subject && (
                <div className="subject">{`${subjects[subject]} (${subject})`}</div>
              )}
            </div>
            <div className="col15">
              <div className="rack">{rack}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
ResultBox.propTypes = {
  searchResults: PropTypes.array.isRequired
};
