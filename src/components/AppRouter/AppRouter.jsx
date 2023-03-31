import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Posts } from './../../pages/Posts';
import { About } from './../../pages/About';
import { Error } from './../Error/Error';
import { PostIdItem } from './../../pages/PostIdItem';

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/posts/:id' element={<PostIdItem />}></Route>
        <Route path='/error' element={<Error />}></Route>
        <Route path='/*' element={<Navigate to='/error' replace />} />
      </Routes>
    </div>
  );
};
