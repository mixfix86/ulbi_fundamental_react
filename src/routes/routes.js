import { Posts } from '../pages/Posts';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { PostIdItem } from '../pages/PostIdItem';
import { Navigate } from 'react-router-dom';
import { Login } from './../pages/Login';

export const privateRoutes = [
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/posts/:id',
    element: <PostIdItem />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/*',
    element: <Navigate to='/posts' replace />,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <Navigate to='/login' replace />,
  },
];
