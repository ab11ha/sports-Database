import React from 'react';
import Logo from '../img/sportsicon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sports'>Sports</Link>
        </li>
        <li>
          <Link to='/teams'>Teams</Link>
        </li>
        <li>
          <Link to='/players'>Players</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
