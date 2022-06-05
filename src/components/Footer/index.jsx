import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, MainFooter, Logo} from './style';
import {ReactComponent as Map} from '../../assets/icons/pin.svg';
import {ReactComponent as Phone} from '../../assets/icons/phone.svg';
import {ReactComponent as Email} from '../../assets/icons/email.svg';
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg';
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg';
import {ReactComponent as Linkedln} from '../../assets/icons/linkedln.svg';
import {ReactComponent as ArrowTop} from '../../assets/icons/arrow-top.svg';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <MainFooter>
      <Container>
        <MainFooter.Top>
          <MainFooter.Contact>
            <MainFooter.Title>Contact Us</MainFooter.Title>
            <MainFooter.Ul>
              <MainFooter.Li><Map/><span className='space'></span> 329 Queensberry Street, North <br /> Melbourne VIC 3051, Australia.</MainFooter.Li>
              <MainFooter.Li><Phone/><a href="tel:+123 456 7890">123 456 7890</a></MainFooter.Li>
              <MainFooter.Li><Email/><a href="mailto:support@houzing.com">support@houzing.com</a></MainFooter.Li>
            </MainFooter.Ul>
            <MainFooter.SocialNetwork>
              <MainFooter.SocialNetwork.Li><MainFooter.IconWrapper><a href='#'><Facebook/></a></MainFooter.IconWrapper></MainFooter.SocialNetwork.Li>
              <MainFooter.SocialNetwork.Li><MainFooter.IconWrapper><a href='#'><Twitter/></a></MainFooter.IconWrapper></MainFooter.SocialNetwork.Li>
              <MainFooter.SocialNetwork.Li><MainFooter.IconWrapper><a href='#'><Instagram/></a></MainFooter.IconWrapper></MainFooter.SocialNetwork.Li>
              <MainFooter.SocialNetwork.Li><MainFooter.IconWrapper><a href='#'><Linkedln/></a></MainFooter.IconWrapper></MainFooter.SocialNetwork.Li>
            </MainFooter.SocialNetwork>
          </MainFooter.Contact>

          <MainFooter.Discover>
            <MainFooter.Title>Discover</MainFooter.Title>
            <MainFooter.Ul>
              <MainFooter.Li><p className="footer-item">Chicago</p></MainFooter.Li>
              <MainFooter.Li><p className="footer-item">Los Angeles</p></MainFooter.Li>
              <MainFooter.Li><p className="footer-item">Miami</p></MainFooter.Li>
              <MainFooter.Li><p className="footer-item">New York</p></MainFooter.Li>
            </MainFooter.Ul>
          </MainFooter.Discover>

          <MainFooter.Category>
            <MainFooter.Title>Lists by Category</MainFooter.Title>
            <MainFooter.Ul>
              <MainFooter.Li><p className='footer-item'>Apartments</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Condos</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Houses</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Offices</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Retail</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Villas</p></MainFooter.Li>
            </MainFooter.Ul>
          </MainFooter.Category>

          <MainFooter.Category>
            <MainFooter.Title>Lists by Category</MainFooter.Title>
            <MainFooter.Ul>
              <MainFooter.Li><p className='footer-item'>About Us</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Terms & Conditions</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Support Center</p></MainFooter.Li>
              <MainFooter.Li><p className='footer-item'>Contact</p></MainFooter.Li>
            </MainFooter.Ul>
          </MainFooter.Category>
        </MainFooter.Top>
      </Container>
      <MainFooter.Line></MainFooter.Line>
      <Container>
        <MainFooter.Bottom>
            <Logo onClick={()=> navigate('/home')}>
              <Logo.Icon/>
              <Logo.Title>Houzing</Logo.Title>
            </Logo>
            <MainFooter.Discription>Copyright © 2022 CreativeLayers. All Right Reserved.</MainFooter.Discription>
            <MainFooter.ArrowTopBtn onClick={() => navigate('/home')}><ArrowTop/></MainFooter.ArrowTopBtn>
        </MainFooter.Bottom>
      </Container>
    </MainFooter>
  )
}

export default Footer;