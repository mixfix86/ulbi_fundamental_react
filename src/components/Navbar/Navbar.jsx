import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <Link to='/posts'>Посты</Link>
        <Link to='/about'>О сайте</Link>
      </div>
    </div>
  );
};
