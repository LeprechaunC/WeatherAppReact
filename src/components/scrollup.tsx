import React, { useState, useEffect } from 'react';

const ScrollUpButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollUp && (
        <button className='scrollUp' onClick={scrollToTop}>^</button>
      )}
    </>
  );
};

export default ScrollUpButton;