import React from 'react'
import { Filter } from '../Filter';
import MainCarousel from './Carousel';
import Category from './Category';
import CardsCarousel from './CardsCarousel';
import { Container } from './style';
import WeeksTopHome from './WeeksTopHome';
import WhyChoose from './WhyChoose';
import Footer from '../Footer';

export const Home = () => {
  return (
    <Container>
      <Filter/>
      <MainCarousel/>
      <CardsCarousel title="Recommended" discription="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."/>
      <WhyChoose/>
      <Category/>
      <WeeksTopHome/>
      <CardsCarousel title="Recent Properties for Rent" discription="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."/>
      <Footer/>
    </Container>
  )
}

export default Home;
