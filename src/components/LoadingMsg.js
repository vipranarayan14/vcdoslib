import React from 'react';
import PropTypes from 'prop-types';

import './LoadingMsg.css';

export const LoadingMsg = ({ isLoadingData, msg }) => 
  isLoadingData && <div className="LoadingMsg">{msg}</div>

LoadingMsg.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired
};
