import React from 'react';
import PropTypes from 'prop-types';

import { subjectList } from '../../utils/subject-list';
import { List, Item } from '../blocks/List';

export const SubjectList = ({ match }) => (
  <div>
    <h3>Browse by Subject</h3>

    <List>
      {Object.entries(subjectList).map(([num, title], id) => (
        <Item
          num={num}
          title={title}
          link={`${match.url}/${num}`}
          key={id}
        ></Item>
      ))}
    </List>
  </div>
);

SubjectList.propTypes = {
  match: PropTypes.object.isRequired
};
