import React from 'react';

import { HiLocationMarker, HiUser, HiServer } from 'react-icons/hi';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="app__banner">
      <div className="app__banner-icon">
        <div>
          <HiUser />
        </div>
        <div>
          <h3>90+</h3>
          <p>Users</p>
        </div>
      </div>

      <div className="app__banner-icon side__border">
        <div>
          <HiLocationMarker />
        </div>
        <div>
          <h3>30+</h3>
          <p>Locations</p>
        </div>
      </div>

      <div className="app__banner-icon">
        <div>
          <HiServer />
        </div>
        <div>
          <h3>50+</h3>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
