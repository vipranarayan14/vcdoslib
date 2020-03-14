import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({ children, className }) => (
  <div className={'Card ' + className}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string
};
