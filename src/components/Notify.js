import React from 'react';
import PropTypes from 'prop-types';

import './Notify.css';

export const Notify = ({ msg }) => <div className="Notify">{msg}</div>;

Notify.propTypes = {
  msg: PropTypes.string.isRequired
};
