import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

import { subjectList } from '../utils/subject-list';

import './Book.css';

const markMissing = rack => (rack === 'NA' ? ' missing' : '');

export const Book = ({
  AccesionNo: accno,
  Author: author,
  BookTitle: title,
  Classification: subject,
  RackNo: rack
}) => (
  <Card className={'Book' + markMissing(rack)}>
    <div className="col15">
      {!!accno && <div className="accno">{accno}</div>}
    </div>
    <div className="col70">
      <div className="title">{title}</div>
      {!!author && <div className="author">by {author}</div>}
      {!!subject && (
        <div className="subject">{`${subjectList[subject]} (${subject})`}</div>
      )}
    </div>
    <div className="col15">
      <div className="rack">{rack}</div>
    </div>
  </Card>
);

Book.propTypes = {
  AccesionNo: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  BookTitle: PropTypes.string.isRequired,
  Classification: PropTypes.string.isRequired,
  RackNo: PropTypes.string.isRequired
};
