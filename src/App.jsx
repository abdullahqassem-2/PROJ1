import React from 'react' ; 
import Main from './Components/Home/Main';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import { RouterProvider, createBrowserRouter } from "react-router-dom";







let routers = createBrowserRouter( [
  {path: '' , element : <Layout/> , children : [
    {index : true  , element : <Main/>},
    {path: 'about' , element : <About/>},
    {path: 'portfolio' , element : <Portfolio/>},
    {path: 'contact' , element : <Contact/>},
    {path:'*' , element : <Notfound/>},


  ]},




] )



export default function App() {
  return <>
<RouterProvider router={routers}></RouterProvider>

  </>
}
