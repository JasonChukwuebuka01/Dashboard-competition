import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './ContextApi/ContextProvider.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'




const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" >

    <Route
      index
      element={<App />}
    />

  </Route>



))


ReactDOM.createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>


)
