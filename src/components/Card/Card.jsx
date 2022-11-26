import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import './Card.scss';

const Card = ({ name, location, icon, text }) => {
  return (
    <div className="app__card">
      <div className="app__card-head">
        <div className="app__card-head_icon">
          <img src={icon} alt="icon" />
          <div>
            <p>{name}</p>
            <p>{location}</p>
          </div>
        </div>
        <div>
          <p>
            4.5
            <AiFillStar />
          </p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
