import React from 'react';
import PropTypes from 'prop-types';

import './ScrollToTop.css';

const handleScrollToTopClick = () => {

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

};

export const ScrollToTop = ({isTop}) => !isTop && (

  <div className="ScrollToTop" onClick={handleScrollToTopClick}>Top</div>

);

React.PropTypes = {
  isTop: PropTypes.bool.isRequired
};
