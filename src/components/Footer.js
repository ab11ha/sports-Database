import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-nav'>
        <li className='footer-nav-item'>
          <p className='footer-nav-link'>Request Sport</p>
        </li>
        <li className='footer-nav-item'>
          <p className='footer-nav-link'>Request Team</p>
        </li>
        <li className='footer-nav-item'>
          <p className='footer-nav-link'>Request Player</p>
        </li>
        <li className='footer-nav-item'>
          <p className='footer-nav-link'>Contact Us</p>
        </li>
      </ul>
      <p class='footer-copyright'>
        &copy; Copyright 2023 by Abhishek Havannagol
      </p>
    </footer>
  );
};

export default Footer;
