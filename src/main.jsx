import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mens from './Compount/pages/Mens.jsx'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './index.css'
import Login from './Compount/pages/Login.jsx'
import Womens from './Compount/pages/Womens.jsx'
import Kids from './Compount/pages/Kids.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <RouterProvider router={router}/> */}
  //   {/* <App/> */}
   <BrowserRouter>
 <Routes>
  <Route path="/"element={<App/>} />
  <Route path="/Mens.jsx"element={<Mens/>} />
  <Route path="/Womens.jsx"element={<Womens/>} />
  <Route path="/Login.jsx"element={<Login/>} />
  <Route path="/Kids.jsx"element={<Kids/>} />
  

  
 </Routes>
</BrowserRouter>
  // </React.StrictMode>,
)

