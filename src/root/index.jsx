import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { navbar } from '../utils/navbar'

export const Root = () => {
  return (
        <Routes>
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
  )
}

export default Root;