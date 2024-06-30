import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Login} from './components/Login.jsx';
import {Signup} from './components/Signup.jsx';
import './App.css'; 
import App from './App.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
