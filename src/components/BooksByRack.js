import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { Results } from './Results';

const filterByRack = rack => book =>
  book['Rack']
    .replace(/\s/g, '')
    .split(',')
    .includes(rack);

export const BooksByRack = ({ allBooks, isLoadingData }) => {
  const { rack } = useParams();

  return (
    <>
      <h3>Books in Rack: {rack} </h3>

      <Results filter={filterByRack(rack)} />
    </>
  );
};

BooksByRack.propTypes = {
  allBooks: PropTypes.array.isRequired,
  isLoadingData: PropTypes.bool.isRequired
};
