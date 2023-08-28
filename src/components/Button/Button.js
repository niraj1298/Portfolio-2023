import React from 'react';
import './Button.css';

function Button() {
  const redirectToAbout = () => {
    window.location.href = '/about'; 
  };

  return (
    <button className="learn-more" onClick={redirectToAbout}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
}

export default Button;
