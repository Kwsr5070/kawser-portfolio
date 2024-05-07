import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Experience from './components/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/skill',
        element:<Skill></Skill>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/Experience',
        element:<Experience></Experience>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
