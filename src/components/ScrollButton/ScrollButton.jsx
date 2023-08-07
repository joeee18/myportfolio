import React, { useState, useEffect } from 'react';
import "../ScrollButton/ScrollButton.css"
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      &uarr;
    </button>
  );
};

export default ScrollButton;