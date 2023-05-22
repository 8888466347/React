import './App.css';
import * as React from 'react';
 
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/ContactUs';
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';




function App() {

  const Layout = () => {
    return (
      <div className="app">
       
          <Navbar />
          <Outlet />
        {/* <Footer /> */}
       
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [


        {
          path: "/",
          element: <Home/>
        },


        {
          path: "about",
          element: <AboutUs/>
        },


        {
          path: "services",
          element: <Services/>
        },


        {
          path: "contact",
          element: <Contact/>
        },

      ],
    },
     
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;