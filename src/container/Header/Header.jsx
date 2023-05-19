import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app___wrapper section__padding" id="home">
    <div className="app__wrapper_info ">
      <SubHeading title="chase the new flavour " />
      <h1 className="app__header-h1">The key to fine dining</h1>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
