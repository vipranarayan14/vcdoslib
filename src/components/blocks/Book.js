import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

import { subjectList } from '../../utils/subject-list';
import { join, iffy } from '../../utils/class-names';

import styles from './Book.module.css';

const bookMissing = rack => rack === 'NA';

export const Book = ({
  'Acc No': accno,
  Author: author,
  Title: title,
  Subject: subject,
  Rack: rack
}) => (
  <Card className={join(styles.Book, iffy(bookMissing(rack), styles.missing))}>
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
  'Acc No': PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Subject: PropTypes.string.isRequired,
  Rack: PropTypes.string.isRequired
};
