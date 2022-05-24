import React from 'react'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Button } from '../Generic/Button'
import { Header, Container, Logo, NavItemsWrapper, activeStyle } from './style'

export const Navbar = () => {
  const navigate = useNavigate();

  const gotoSingnIn = ()=> {
    navigate('/signin');
  }
  return (
    <Header>
      <Container className='nocopy'>
        <Logo onClick={()=> navigate('/home')}>
          <Logo.Icon/>
          <Logo.Title>Houzing</Logo.Title>
        </Logo>

        <NavItemsWrapper >
          {navbar.map(({id, title, path, hidden})=> 
           !hidden && <NavLink key={id} to={path} style={activeStyle}>
              {title}
            </NavLink>
          )}
        </NavItemsWrapper>

        <Button width={'120'} onClick={gotoSingnIn}>Login</Button>
      </Container>
        <Outlet/>
    </Header>
  )
}
