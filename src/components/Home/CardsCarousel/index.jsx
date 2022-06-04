import React,{useRef} from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Card } from '../../Generic/Card';
import {ArrowLeft, ArrowRight, CardsWrapper, Container, NextIconWrapper, CardsCarouselWrapper } from './style';

const responsive = {
    0: { items: 1 },
    576: { items: 2 },
    992: { items: 3 },
  };

export const CardsCarousel = ({title, discription}) => {
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
        <CardsCarouselWrapper className='nocopy'>
            <CardsCarouselWrapper.Title className="section-title text-center">{title}</CardsCarouselWrapper.Title>
            <CardsCarouselWrapper.Discription className="text-center">{discription}</CardsCarouselWrapper.Discription>
            <CardsWrapper>
                <NextIconWrapper position="left" onClick={()=> slider.current?.slideNext()}>
                    <ArrowLeft/>
                </NextIconWrapper>
                <NextIconWrapper position="right" onClick={()=> slider.current?.slidePrev()}>
                    <ArrowRight/>
                </NextIconWrapper>
                <AliceCarousel
                    ref={slider}
                    responsive={responsive}
                    mouseTracking
                    items={items}
                    controlsStrategy="alternate"
                    autoPlayInterval={1500}
                    autoPlay={true}
                    infinite={true}
                />
                </CardsWrapper>
        </CardsCarouselWrapper>
      </Container>
  )
}

export default CardsCarousel;