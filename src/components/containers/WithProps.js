import React from 'react';

export const withProps = (Component, passedProps) =>
  function WithProps(props) {
    WithProps.displayName = `WithProps(${Component.name})`;

    return <Component {...passedProps} {...props} />;
  };
