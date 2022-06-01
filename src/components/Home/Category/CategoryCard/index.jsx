import React from 'react'
import { Card } from './style';

export const CategoryCard = ({imgUrl, title}) => {
  return (
    <Card>
        <Card.ImgWrapper>
            <Card.Img src={imgUrl} alt="card img"/>
        </Card.ImgWrapper>
        {/* <Icon/>  */}
        <Card.Title>{title}</Card.Title>   
    </Card>
  )
}


export default CategoryCard;
