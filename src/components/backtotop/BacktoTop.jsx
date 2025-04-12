import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BacktoTop.css';

const BacktoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY>500){
            setShowButton(true);
        }else{
            setShowButton(false)
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    showButton && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default BacktoTop;
