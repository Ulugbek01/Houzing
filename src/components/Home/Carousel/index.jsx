import React,{useRef} from 'react'
import { Carousel } from 'antd';
import { Container, NextIconWrapper, ImgWrapper, Img, IconWrapper, Bed, Bath, Car, Ruler, IconsContainer, CarouselWrapper } from './style';
import { Button } from '../../Generic/Button';
import {ReactComponent as ArrowLeft} from '../../../assets/icons/left-arrow.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/right-arrow.svg';
import mainImage1 from "../../../assets/images/home-img.jpg";
import mainImage2 from "../../../assets/images/apartment1.jpg";
import mainImage3 from "../../../assets/images/apartment2.jpg";

export const MainCarousel = () => {
    const slider = useRef();
  return (
    <Container>
        <CarouselWrapper>
            <NextIconWrapper position="left" onClick={()=> slider.current?.next()}>
                <ArrowLeft/>
            </NextIconWrapper>
            <NextIconWrapper position="right" onClick={()=> slider.current?.prev()}>
                <ArrowRight/>
            </NextIconWrapper>
            <Carousel autoplay ref={slider} dots>
                <ImgWrapper>
                <Img src={mainImage1} alt="img"/>
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
                    <Img src={mainImage2} alt="img"/>
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
                    <Img src={mainImage3} alt="img"/>
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
      </CarouselWrapper>
    </Container>
  )
}

export default MainCarousel;