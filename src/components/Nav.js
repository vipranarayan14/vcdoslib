import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export const Nav = () => (
  <nav>
    <NavLink to="/search" className="NavLink">
      Search
    </NavLink>
    <NavLink to="/browse" className="NavLink">
      Browse
    </NavLink>
  </nav>
);
