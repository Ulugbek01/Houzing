import React from 'react'
import { Filter } from '../Filter';
import MainCarousel from './Carousel';
import Category from './Category';
import Recommended from './Recommended';
import { Container } from './style';
import WeeksTopHome from './WeeksTopHome';
import WhyChoose from './WhyChoose';

export const Home = () => {
  return (
    <Container>
      <Filter/>
      <MainCarousel/>
      <Recommended/>
      <WhyChoose/>
      <Category/>
      <WeeksTopHome/>
    </Container>
  )
}

export default Home;
