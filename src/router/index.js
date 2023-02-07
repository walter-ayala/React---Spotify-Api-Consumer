import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "detail/:id",
    element: <Detail/>
  },
  {
    path: "*",
    element: <NotFound/>
  },
]);

export default router