import React from 'react';

export const SearchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64">
    <circle cx="24" cy="24" r="22" fill="transparent" strokeWidth="3" />
    <rect
      x="43"
      y="27"
      width="30"
      height="10"
      rx="2"
      ry="2"
      transform="rotate(45 32 32)"
    />
  </svg>
);
