import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from '../UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from './../../context/index';

export const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  return (
    <div className='navbar'>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className='navbar__links'>
        <Link to='/posts'>Посты</Link>
        <Link to='/about'>О сайте</Link>
      </div>
    </div>
  );
};
