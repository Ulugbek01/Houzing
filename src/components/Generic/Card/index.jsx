import React from 'react'
import { CardBody, CardFooter, CardImgWrapper, CardWrapper } from './style'

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
            <img src="" alt=""/>
        </CardImgWrapper>

        <CardBody>
            <CardBody.InfoWrapper>
                <CardBody.Title>New Apartment Nice Wiew</CardBody.Title>
                <CardBody.Discription>Quincy St, Brooklyn, NY, USA</CardBody.Discription>
            </CardBody.InfoWrapper>
            
        </CardBody>

        <CardFooter>

        </CardFooter>
    </CardWrapper>
  )
}
