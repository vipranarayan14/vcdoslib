import React, { Component } from 'react';

import './ScrollToTop.css';

const handleScrollToTopClick = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export class ScrollToTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const maxScrollTop = 250;

    const isTop =
      document.body.scrollTop < maxScrollTop &&
      document.documentElement.scrollTop < maxScrollTop;

    this.setState({ isTop });
  }

  render() {
    return (
      !this.state.isTop && (
        <div className="ScrollToTop" onClick={handleScrollToTopClick}>
          Top
        </div>
      )
    );
  }
}
