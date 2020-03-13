import React from 'react';
import PropTypes from 'prop-types';

import './Nav.css';

import { NavLink } from 'react-router-dom';

export const Nav = ({ isLoadingData, msg }) => (
  <nav>
    <NavLink to="/search" className="NavLink">
      Search
    </NavLink>
    <NavLink to="/browse" className="NavLink">
      Browse
    </NavLink>
  </nav>
);

Nav.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired
};
