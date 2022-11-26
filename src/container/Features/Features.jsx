import React from 'react';
import { Feature } from '../../components';

import { images } from '../../constants';
import './Features.scss';

const Features = () => {
  return (
    <div className="app__features app__wrapper section__padding" id="features">
      <div className="app__wrapper_img">
        <img src={images.features} alt="features img" />
      </div>
      <div className="app__wrapper_info">
        <h1>We Provide Many Features You Can Use.</h1>
        <p className="sub-margin">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <Feature text="Powerfull online protection." />
        <Feature text="Internet without borders." />
        <Feature text="Supercharged VPN" />
        <Feature text="No specific time limits." />
      </div>
    </div>
  );
};

export default Features;
