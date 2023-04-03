import React from 'react';
import { MyInput } from '../components/UI/input/MyInput';
import { MyButton } from '../components/UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from './../context/index';

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type='text' placeholder='Введите логин' />
        <MyInput type='password' placeholder='Введите пароль' />
        <MyButton onClick={(e) => login(e)}>Войти</MyButton>
      </form>
    </div>
  );
};
