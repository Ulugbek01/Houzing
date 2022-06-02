import React from 'react'
import { Card } from './style';

export const CategoryCard = ({imgUrl, icon, title}) => {
  return (
    <Card>
        <Card.ImgWrapper>
            <Card.Img src={imgUrl} alt="card img"/>
        </Card.ImgWrapper>
        <Card.Overliy>
          <img src={icon} alt="icon" />
          <Card.Title>{title}</Card.Title>   
        </Card.Overliy>
    </Card>
  )
}


export default CategoryCard;
