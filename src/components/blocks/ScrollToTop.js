import React, { Component } from 'react';

import styles from './ScrollToTop.module.css';

const handleScrollToTopClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const isTop = window.scrollY < window.innerHeight;

    if (this.state.isTop !== isTop) {
      this.setState({ isTop });
    }
  }

  render() {
    return (
      !this.state.isTop && (
        <div className={styles.ScrollToTop} onClick={handleScrollToTopClick}>
          Top
        </div>
      )
    );
  }
}
