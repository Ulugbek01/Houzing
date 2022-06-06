import React from 'react'
import { ReactComponent as Bed } from "../../../assets/icons/beds.svg";
import { ReactComponent as Bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as Car } from "../../../assets/icons/car.svg";
import { ReactComponent as Ruler } from "../../../assets/icons/ruler.svg";
import {ReactComponent as Resize} from '../../../assets/icons/arrow-top-bottom.svg';
import {ReactComponent as Heart} from '../../../assets/icons/heart.svg';
import  avatar from '../../../assets/images/avatar1.png';
import noimg from '../../../assets/images/noimg.png';
import {CardBody, CardFooter, CardImgWrapper, CardWrapper, CradBtn, IconWrapper, InfoDetailes } from './style'

export const Card = ({
    info,
    width,
    height,
    p,
    mt,
    mr,
    mb,
    ml,
    margin
}) => {
  return (
    <CardWrapper
        width={width}
        height={height}
        padding={p}
        margin={margin}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
    >
        <CardImgWrapper>
          <CradBtn primary="primary" value="left">Featured</CradBtn>
          <CradBtn value="right">For Sale</CradBtn>
          <img src={info?.attachments[0]?.imgPath || noimg} alt="apartment" width='100%' height='100%'/>
        </CardImgWrapper>

        <CardBody>
            <CardBody.Avatar>
              <img src={info?.user?.avatar || avatar} alt="user" />
            </CardBody.Avatar>
            <CardBody.InfoWrapper>
                <CardBody.Title>{info?.title || 'New Apartment Nice Wiew'} Category: {info?.category?.name}</CardBody.Title>
                <CardBody.Discription>
                  {info?.name || 'House'}, {info?.address || 'Address'},{" "}
                  {info?.city || 'City'} {info?.country || 'Country'}
                </CardBody.Discription>
            </CardBody.InfoWrapper>
            <InfoDetailes>
                <IconWrapper>
                  <Bed/>
                  <IconWrapper.SubTitle>{info?.houseDetails?.beds || 0} Beds</IconWrapper.SubTitle>
                </IconWrapper>
                <IconWrapper>
                  <Bath/>
                  <IconWrapper.SubTitle>{info?.houseDetails?.bath || 0} Bath</IconWrapper.SubTitle>
                </IconWrapper>
                <IconWrapper>
                  <Car/>
                  <IconWrapper.SubTitle>{info?.houseDetails?.garage || 0} Garage</IconWrapper.SubTitle>
                </IconWrapper>
                <IconWrapper>
                  <Ruler/>
                  <IconWrapper.SubTitle>{info?.houseDetails?.area || 0} Sq Ft</IconWrapper.SubTitle>
                </IconWrapper>
            </InfoDetailes>
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
