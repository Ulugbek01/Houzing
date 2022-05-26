import React from 'react'
import { Bath, Bed, Car, CardsWrapper, Container, IconsContainer, IconWrapper, Img, ImgWrapper, RecommendedWrapper, Ruler } from './style';
import { Button } from '../Generic/Button';
import { Card } from '../Generic/Card';
import { Filter } from '../Filter';
import { Carousel } from 'antd';
import mainImage1 from "../../assets/images/home-img.jpg";
import mainImage2 from "../../assets/images/apartment1.jpg";
import mainImage3 from "../../assets/images/apartment2.jpg";



export const Home = () => {
  return (
    <Container>
      <Filter/>

      <Carousel autoplay>
          <ImgWrapper>
            <Img src={mainImage1}/>
            <Img.Owerliy>
              <Img.Owerliy.Title>Skyper Pool Partment</Img.Owerliy.Title>
              <Img.Owerliy.Discription>112 Glenwood Ave Hyde Park, Boston, MA</Img.Owerliy.Discription>
              <IconsContainer>
                <IconWrapper>
                  <Bed/>
                  <IconWrapper.SubTitle>4 Beds</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Bath/>
                  <IconWrapper.SubTitle>5 Baths</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Car/>
                  <IconWrapper.SubTitle>1 Garage</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Ruler/>
                  <IconWrapper.SubTitle>1200 Sq Ft</IconWrapper.SubTitle>
                </IconWrapper>
              </IconsContainer>
              <IconWrapper.Price>$5,250/mo</IconWrapper.Price>
              <Button width={180} mAuto={'auto'}>Read more</Button>
            </Img.Owerliy>
          </ImgWrapper>
          <ImgWrapper>
            <Img src={mainImage2}/>
            <Img.Owerliy>
              <Img.Owerliy.Title>Skyper Pool Partment</Img.Owerliy.Title>
              <Img.Owerliy.Discription>112 Glenwood Ave Hyde Park, Boston, MA</Img.Owerliy.Discription>
              <IconsContainer>
                <IconWrapper>
                  <Bed/>
                  <IconWrapper.SubTitle>4 Beds</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Bath/>
                  <IconWrapper.SubTitle>5 Baths</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Car/>
                  <IconWrapper.SubTitle>1 Garage</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Ruler/>
                  <IconWrapper.SubTitle>1200 Sq Ft</IconWrapper.SubTitle>
                </IconWrapper>
              </IconsContainer>
              <IconWrapper.Price>$5,250/mo</IconWrapper.Price>
              <Button width={180} mAuto={'auto'}>Read more</Button>
            </Img.Owerliy>
          </ImgWrapper>
          <ImgWrapper>
            <Img src={mainImage3}/>
            <Img.Owerliy>
              <Img.Owerliy.Title>Skyper Pool Partment</Img.Owerliy.Title>
              <Img.Owerliy.Discription>112 Glenwood Ave Hyde Park, Boston, MA</Img.Owerliy.Discription>
              <IconsContainer>
                <IconWrapper>
                  <Bed/>
                  <IconWrapper.SubTitle>4 Beds</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Bath/>
                  <IconWrapper.SubTitle>5 Baths</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Car/>
                  <IconWrapper.SubTitle>1 Garage</IconWrapper.SubTitle>
                </IconWrapper>

                <IconWrapper>
                  <Ruler/>
                  <IconWrapper.SubTitle>1200 Sq Ft</IconWrapper.SubTitle>
                </IconWrapper>
              </IconsContainer>
              <IconWrapper.Price>$5,250/mo</IconWrapper.Price>
              <Button width={180} mAuto={'auto'}>Read more</Button>
            </Img.Owerliy>
          </ImgWrapper>
      </Carousel>

      <RecommendedWrapper>
        <RecommendedWrapper.Title className="section-title">Recommended</RecommendedWrapper.Title>
        <RecommendedWrapper.Discription>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</RecommendedWrapper.Discription>
        <CardsWrapper>
          <Card />
        </CardsWrapper>
      </RecommendedWrapper>
    </Container>
  )
}

export default Home;
