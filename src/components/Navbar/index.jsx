import React from 'react'
import { Link } from 'react-router-dom'
import { navbar } from '../../utils/navbar'

export const Navbar = () => {
  return (
    <div>
      {navbar.map(({id, title, path})=> 
        <Link key={id} to={path}>
          {title}
        </Link>
      )}
    </div>
  )
}
