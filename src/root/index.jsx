import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {navbar.map(({id, path, Element}) => 
            <Route key={id} path={path} element={Element}/>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Root;