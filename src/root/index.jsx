import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
      <BrowserRouter>
        <Routes>
        {/* {navbar.map(({id, path, Element, hidden}) =>{
              return !hidden &&  (
                <Route key={id} path={path} element={Element}/>
              )
            }
        )} */}
          <Route element={<Navbar/>}>
            {navbar.map(({id, path, Element, hidden}) =>{
              return !hidden &&  (
                <Route key={id} path={path} element={Element}/>
              )
            }
            )}
          </Route>

          <Route path='/' element={<Navigate to={'/home'}/>}/>
          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default Root;