import React from 'react';
import search from '../images/search.png';

const Header = () => (
  <nav className="header">
    <img src={search} alt="search" />
    <h1 className="logo">Covid-19 Stats</h1>
  </nav>
);
export default Header;
