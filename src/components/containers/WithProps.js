import React from 'react';
import PropTypes from 'prop-types';

export const withProps = (Component, passedProps) => {
  const WithProps = props => <Component {...passedProps} {...props} />;

  WithProps.displayName = `WithProps(${Component.name})`;

  return WithProps;
};

withProps.propTypes = {
  Component: PropTypes.element.isRequired
};
