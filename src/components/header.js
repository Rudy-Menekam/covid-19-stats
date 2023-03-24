import { FiSettings } from 'react-icons/fi';
import { MdMic } from 'react-icons/md';
import React from 'react';
import search from '../images/search.png';

const Header = () => (
  <nav className="header">
    <div className="logo-area">
      <img src={search} alt="search" />
      <h1 className="logo">Covid-19 Stats</h1>
    </div>
    <div className="icon">
      <MdMic />
      <FiSettings />
    </div>
  </nav>
);
export default Header;
