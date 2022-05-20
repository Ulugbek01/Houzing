import React from 'react'
import { NavLink } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Header, Container, LogoWrapper, NavItemsWrapper } from './style'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import './style.css';

export const Navbar = () => {
  return (
    <Header>
      <Container>
        <LogoWrapper>
          <Logo width={30} height={36}/>
          <h3 className='logo-title'>Houzing</h3>
        </LogoWrapper>

        <NavItemsWrapper>
          {navbar.map(({id, title, path, hidden})=> 
           !hidden && <NavLink key={id} to={path} className="nav-link">
              {title}
            </NavLink>
          )}
        </NavItemsWrapper>

        <button type='button' className='button'>Login</button>
      </Container>
    </Header>
  )
}
