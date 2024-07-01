import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from './components/Login.jsx';
import {Signup} from './components/Signup.jsx';
import {Landingpage} from './components/Landingpage.jsx';

import './index.css';
import './App.css'; 
import App from './App.jsx';
import { Provider } from 'react-redux'
import { store } from './Store/store.js';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  
  {
    path:'/landingpage',
    element:<Landingpage/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
