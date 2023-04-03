import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

import './App.css';
import { AppRouter } from './components/AppRouter/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.getItem('isAuth') ? setIsAuth(true) : setIsAuth(false);
    setIsLoading(false)
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
