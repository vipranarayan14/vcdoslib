import React from 'react';
import PropTypes from 'prop-types';

export const withProps = (Component, passedProps) =>
  function WithProps(props) {
    WithProps.displayName = `WithProps(${Component.name})`;

    return <Component {...passedProps} {...props} />;
  };

withProps.propTypes = {
  Component: PropTypes.element.isRequired
};
