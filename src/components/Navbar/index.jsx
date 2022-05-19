import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbar } from '../../utils/navbar'

export const Navbar = () => {
  return (
    <div>
      {navbar.map(({id, title, path})=> 
        <NavLink key={id}>
          {title}
        </NavLink>
      )}
    </div>
  )
}
