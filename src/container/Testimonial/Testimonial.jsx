import React from 'react';
import { BsFillArrowRightCircleFill, BsArrowLeftCircle } from 'react-icons/bs';
import Card from '../../components/Card/Card';

import { images } from '../../constants';
import './Testimonial.scss';

const Testimonial = () => {
  return (
    <div className="app__testimonial section__padding" id="testimonials">
      <div className="app__testimonial-head">
        <h1>Trusted by Thousands of Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="app__testimonial-container">
        <Card
          name="Viezh Robert"
          location="Warsaw, Poland"
          icon={images.person03}
          text="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
        />
        <Card
          name="Yessica Christy"
          location="Shanxi, China"
          icon={images.person01}
          text="“I like it because I like to travel far and still can connect with high speed.”."
        />
        <Card
          name="Kim Young Jou"
          location="Seoul, South Korea"
          icon={images.person02}
          text="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
        />
      </div>

      <div className="app__testimonial-card_arrows">
        <BsArrowLeftCircle className="card__arrow-left" />
        <BsFillArrowRightCircleFill className="card__arrow-right" />
      </div>
    </div>
  );
};

export default Testimonial;
