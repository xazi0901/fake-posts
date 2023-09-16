import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import logo from './logo.svg';
import Home from './Views/Home/Home';
import Posts from './Views/Posts/Posts';
import Products from './Views/Products/Products'
import NavTop from './Components/NavTop/NavTop';
import RootLayout from './Routes/RootLayout';
import LogInPopUp from './Components/LogInPopUp/LogInPopUp'
// import LoginLink from './Components/LoginLink/LoginLink'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <RootLayout/>,
    children: [
    {index:true, element:<Home/>},
     {
      path: "/posts",
      element: <Posts />},
      {
      path: "/products",
      element: <Products />}],
//       {
//       path: "login",
//       element: <LoginLink/>}]
  },

]);

function App() {
 return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default App;
//   return (
//     <div className="App">
//     <NavTop />
//
//       <Home/>
//     </div>
//   );