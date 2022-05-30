import React from 'react'
import { Filter } from '../Filter';
import MainCarousel from './Carousel';
import Recommended from './Recommended';
import { Container } from './style';

export const Home = () => {
  return (
    <Container>
      <Filter/>
      <MainCarousel/>
      <Recommended/>
    </Container>
  )
}

export default Home;
