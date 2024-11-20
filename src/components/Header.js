import React from 'react';

const Header = () => {
  // toggle nav button
  const toggle = () => {
    document.body.classList.toggle('show-nav');
  };

  return (
    <header className='header'>
      <button className='toggle' onClick={toggle}>
        <i className='fa fa-bars fa-2x'></i>
      </button>
      <h1>Sports Database</h1>
    </header>
  );
};

export default Header;
