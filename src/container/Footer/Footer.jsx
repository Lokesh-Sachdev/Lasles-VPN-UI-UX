import React from 'react';

import { images } from '../../constants';
import './Footer.scss';

const Footer = () => (
  <div className="app__footer section__padding" id="help">
    <div className="app__footer-heading">
      <img src={images.logo} alt="logo" />
      <p>
        <b>LaslesVPN</b> is a private virtual network that has unique features
        and has high security.
      </p>
      <div className="app__footer-socials">
        <img src={images.facebook} alt="facebook" />
        <img src={images.twitter} alt="twitter" />
        <img src={images.instagram} alt="instagram" />
      </div>
      <p>©2020LaslesVPN</p>
    </div>
    <div className="app__footer-links">
      <div className="app__footer-links_product">
        <h3>Product</h3>
        <p>Download </p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
      </div>
      <div className="app__footer-links_engage">
        <h3>Engage</h3>
        <p>LaslesVPN ? </p>
        <p>FAQ</p>
        <p>Tutorials</p>
        <p>Tutorials</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
      <div className="app__footer-links_earn">
        <h3>Earn Money</h3>
        <p>Affiliate</p>
        <p>Become Partner</p>
      </div>
    </div>
  </div>
);

export default Footer;
