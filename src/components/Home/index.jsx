import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Card } from '../Generic/Card';
import { Filter } from '../Filter';
import MainCarousel from './Carousel';

import {CardsWrapper, Container, NextIconWrapper, RecommendedWrapper } from './style';
import {ReactComponent as ArrowLeft} from '../../assets/icons/left-arrow.svg';
import {ReactComponent as ArrowRight} from '../../assets/icons/right-arrow.svg';


const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  992: { items: 3 },
};

export const Home = () => {
  const slider = useRef();
  const items = [
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>,
    <Card/>
  ]
  return (
    <Container>
      <Filter/>
      
      <MainCarousel/>

      <RecommendedWrapper className='nocopy'>
        <RecommendedWrapper.Title className="section-title text-center">Recommended</RecommendedWrapper.Title>
        <RecommendedWrapper.Discription className="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</RecommendedWrapper.Discription>
        <CardsWrapper>
          <NextIconWrapper position="left" onClick={()=> slider.current?.next()}>
            <ArrowLeft/>
          </NextIconWrapper>
          <NextIconWrapper position="right" onClick={()=> slider.current?.prev()}>
            <ArrowRight/>
          </NextIconWrapper>
          <AliceCarousel
            ref={slider}
            responsive={responsive}
            mouseTracking
            items={items}
            controlsStrategy="alternate"
          />
        </CardsWrapper>
      </RecommendedWrapper>
    </Container>
  )
}

export default Home;
