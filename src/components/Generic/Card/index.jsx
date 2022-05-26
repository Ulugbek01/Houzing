import React from 'react'
import { ReactComponent as Bed } from "../../../assets/icons/beds.svg";
import { ReactComponent as Bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../../assets/icons/car.svg";
import { ReactComponent as Ruler } from "../../../assets/icons/ruler.svg";
import {ReactComponent as Resize} from '../../../assets/icons/arrow-top-bottom.svg';
import {ReactComponent as Heart} from '../../../assets/icons/heart.svg';
import apartment from '../../../assets/images/apartment1.jpg';
import { IconsContainer } from '../../Home/style'
import {CardBody, CardFooter, CardImgWrapper, CardWrapper, IconWrapper } from './style'

export const Card = ({
    width,
    height,
    p,
    mt,
    mr,
    mb,
    ml,
    m
}) => {
  return (
    <CardWrapper
        width={width}
        height={height}
        padding={p}
        margin={m}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
    >
        <CardImgWrapper>
            <img src={apartment} alt="apartment"/>
        </CardImgWrapper>

        <CardBody>
            <CardBody.InfoWrapper>
                <CardBody.Title>New Apartment Nice Wiew</CardBody.Title>
                <CardBody.Discription>Quincy St, Brooklyn, NY, USA</CardBody.Discription>
            </CardBody.InfoWrapper>
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
        </CardBody>

        <CardFooter>
            <CardFooter.Left>
                <CardFooter.DiscountPrice>$2,800/mo</CardFooter.DiscountPrice>
                <CardFooter.OriginalPrice>$7,500/mo</CardFooter.OriginalPrice>
            </CardFooter.Left>
            <CardFooter.Right>
                <Resize/>
                <CardFooter.IconWrapper>
                    <Heart/>
                </CardFooter.IconWrapper>     
            </CardFooter.Right>
        </CardFooter>
    </CardWrapper>
  )
}
