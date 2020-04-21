import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

import { subjectList } from '../utils/subject-list';

import styles from './Book.module.css';

const markMissing = rack => (rack === 'NA' ? styles.missing : '');

export const Book = ({
  'Acc No': accno,
  Author: author,
  Title: title,
  Subject: subject,
  Rack: rack
}) => (
  <Card className={`${styles.Book} ${markMissing(rack)}`}>
    {!!accno && <div className={styles.accno}>{accno}</div>}

    <div className={styles.details}>
      <div className={styles.title}>{title}</div>

      {!!author && <div className={styles.author}>by {author}</div>}

      {!!subject && (
        <div className={styles.subject}>
          {`${subjectList[subject]} (${subject})`}
        </div>
      )}
    </div>

    <div className={styles.rack}>{rack}</div>
  </Card>
);

Book.propTypes = {
  AccesionNo: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  BookTitle: PropTypes.string.isRequired,
  Classification: PropTypes.string.isRequired,
  RackNo: PropTypes.string.isRequired
};
