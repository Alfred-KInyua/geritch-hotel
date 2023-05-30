import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Experience the ultimate comfort and luxury at our hotel - your home
            away from home!{' '}
          </p>
        </div>
        <p className="p__opensans">
          Our hotel strives to provide the best possible dining experience for
          our guests, and I'm proud to be a part of that effort as the head
          chef. We use only the freshest ingredients sourced from local
          producers whenever possible, and we take great care to prepare each
          dish with the utmost attention to detail.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Alfred Kinyua</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
