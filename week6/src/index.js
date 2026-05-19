import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import User1Page from './pages/User1Page';
import User2Page from './pages/User2Page';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },   
      {
        path: "/user/1",
        element: <User1Page />,
      },
      {
        path: "/user/2",
        element: <User2Page />,
      },         //경로(path)에 컴포넌트(elemnet) 넣겠다.
    ]);
    
ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />,
    )