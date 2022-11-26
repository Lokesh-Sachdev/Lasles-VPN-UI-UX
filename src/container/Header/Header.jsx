import React from 'react';

import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="about">
    <div className="app__wrapper_info">
      <h1>
        Want anything to be easy with <b>LaslesVPN</b>.
      </h1>
      <p>
        Provide a network for all your needs with ease and fun using LaslesVPN
        discover interesting features from us.
      </p>
      <button className="custom__button" type="button">
        Get Started
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.heading} alt="header img" />
    </div>
  </div>
);

export default Header;
