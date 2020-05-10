import React, { useEffect, useState } from 'react';

import styles from './ScrollToTop.module.css';

const handleScrollToTopClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const getScrollDifference = () => window.scrollY < window.innerHeight;

export const ScrollToTop = (props) => {
  const [isTop, setIsTop] = useState(getScrollDifference());

  useEffect(() => {
    const handleScroll = () => {
      const nextIsTop = getScrollDifference();

      if (isTop !== nextIsTop) {
        setIsTop(nextIsTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    !isTop && (
      <div className={styles.ScrollToTop} onClick={handleScrollToTopClick}>
        Top
      </div>
    )
  );
};
