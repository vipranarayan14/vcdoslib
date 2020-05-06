import React from 'react';
import { withRouter } from 'react-router-dom';

class $ScrollReset extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export const ScrollReset = withRouter($ScrollReset);
