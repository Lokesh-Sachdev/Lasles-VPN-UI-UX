import React from 'react';

import './Banner.scss';

const Banner = () => {
  return (
    <div className="app__banner">
      <div>
        <h1>Subscribe Now for Get Special Features!</h1>
        <p>Let's subscribe with us and find the fun.</p>
      </div>
      <button type="button" className="custom__button">
        Subscribe Now
      </button>
    </div>
  );
};

export default Banner;
