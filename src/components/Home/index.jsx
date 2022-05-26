import React from 'react'
import { Bath, Bed, Car, Container, IconsContainer, IconWrapper, Img, ImgWrapper, Ruler } from './style';
import { Button } from '../Generic/Button';
import { Filter } from '../Filter';
import { Carousel } from 'antd';
import mainImage from "../../assets/images/home-img.jpg";



export const Home = () => {
  // const ref = useRef();
  return (
    <Container>
      <Filter/>
        <Carousel autoplay>
          <ImgWrapper>
            <Img src={mainImage}/>
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
            <Img src={mainImage}/>
            <Img.Owerliy></Img.Owerliy>
          </ImgWrapper>
          <ImgWrapper>
            <Img src={mainImage}/>
            <Img.Owerliy></Img.Owerliy>
          </ImgWrapper>
        </Carousel>
    </Container>
  )
}

export default Home;
