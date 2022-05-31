import React from 'react'
import { Filter } from '../Filter';
import MainCarousel from './Carousel';
import Recommended from './Recommended';
import { Container } from './style';
import WhyChoose from './WhyChoose';

export const Home = () => {
  return (
    <Container>
      <Filter/>
      <MainCarousel/>
      <Recommended/>
      <WhyChoose/>
    </Container>
  )
}

export default Home;
