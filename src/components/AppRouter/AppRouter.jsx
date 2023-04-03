import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../../routes/routes';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Loader } from '../UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
      </Routes>
    </div>
  );
};
