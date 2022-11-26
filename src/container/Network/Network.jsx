import React from 'react';

import { images } from '../../constants';
import './Network.scss';

const Network = () => {
  return (
    <div className="app__network section__padding">
      <h1>Huge Global Network of Fast VPN</h1>
      <p>
        See <b>LaslesVPN</b> everywhere to make it easier for you when you move
        locations.
      </p>
      <img src={images.map} alt="map" />

      <div>
        <img src={images.netflix} alt="netflix" />
        <img src={images.reddit} alt="reddit" />
        <img src={images.amazon} alt="amazon" />
        <img src={images.discord} alt="discord" />
        <img src={images.spotify} alt="spotify" />
      </div>
    </div>
  );
};

export default Network;
