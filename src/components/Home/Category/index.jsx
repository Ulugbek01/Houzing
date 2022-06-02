import React,{useRef} from 'react'
import AliceCarousel from 'react-alice-carousel';
import CategoryCard from './CategoryCard';
import { ArrowLeft, ArrowRight, CarouselWrapper, Container, MainCategory, NextIconWrapper } from './style';
import categoryImg1 from '../../../assets/images/category-img1.png';
import categoryImg2 from '../../../assets/images/category-img2.png';
import categoryImg3 from '../../../assets/images/category-img3.png';
import categoryImg4 from '../../../assets/images/category-img4.png';
import house from '../../../assets/icons/house.svg';
import apartment from '../../../assets/icons/apartment.svg';
import office from '../../../assets/icons/business-and-trade.svg';
import villa from '../../../assets/icons/villa.svg';


const responsive = {
  0: { items: 1 },
  576: { items: 2 },
  992: { items: 3 },
  1200: { items: 4 },
};

export const Category = () => {
  const slider = useRef();

  const items = [
    <CategoryCard imgUrl={categoryImg1} icon={house} title="House"/>,
    <CategoryCard imgUrl={categoryImg2} icon={apartment} title="Apartment"/>,
    <CategoryCard imgUrl={categoryImg3} icon={office} title="Office"/>,
    <CategoryCard imgUrl={categoryImg4} icon={villa} title="Villa"/>,
    <CategoryCard imgUrl={categoryImg3} icon={office} title="Office"/>,
  ]

  return (
    <MainCategory>
        <Container>
            <MainCategory.Title className="text-center">Category</MainCategory.Title>
            <MainCategory.Text className="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</MainCategory.Text>
            <CarouselWrapper>
              <NextIconWrapper position="left" onClick={()=> slider.current?.slideNext()}>
                      <ArrowLeft/>
                  </NextIconWrapper>
                  <NextIconWrapper position="right" onClick={()=> slider.current?.slidePrev()}>
                      <ArrowRight/>
                  </NextIconWrapper>
              <AliceCarousel
                ref={slider}
                items={items}
                mouseTracking={true}
                controlsStrategy="alternate"
                responsive={responsive}
                autoPlayInterval={1500}
                autoPlay={true}
                infinite={true}
              />
            </CarouselWrapper>
        </Container>
    </MainCategory>
  )
}

export default Category;