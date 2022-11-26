import React from 'react';
import { Plan, Text } from '../../components';

import { images } from '../../constants';
import './Plans.scss';

const Plans = () => {
  return (
    <div className="app__plans section__padding" id="pricing">
      <div>
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div className="app__plans-container">
        <div className="plan__box">
          <div>
            <Plan img={images.free} title="Free Plan" />
            <Text text="Unlimited Bandwitch" />
            <Text text="Encrypted Connection" />
            <Text text="No Traffic Logs" />
            <Text text="Works on All Devices" />
          </div>
          <div>
            <h3>Free</h3>
            <button type="button">Select</button>
          </div>
        </div>
        <div className="plan__box">
          <div>
            <Plan img={images.standard} title="Standard Plan" />
            <Text text="Unlimited Bandwitch" />
            <Text text="Encrypted Connection" />
            <Text text="No Traffic Logs" />
            <Text text="Works on All Devices" />
            <Text text="Connect Anyware" />
          </div>
          <div>
            <h3>
              $9 <span>/ mo</span>
            </h3>
            <button type="button">Select</button>
          </div>
        </div>
        <div className="plan__box">
          <div>
            <Plan img={images.premium} title="Premium Plan" />
            <Text text="Unlimited Bandwitch" />
            <Text text="Encrypted Connection" />
            <Text text="No Traffic Logs" />
            <Text text="Works on All Devices" />
            <Text text="Connect Anyware" />
            <Text text="Get New Features" />
          </div>
          <div>
            <h3>
              $12 <span>/ mo</span>
            </h3>
            <button type="button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
