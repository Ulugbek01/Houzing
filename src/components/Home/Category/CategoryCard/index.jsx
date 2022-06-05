import React from 'react'
import { Card } from './style';
import categoryImg from '../../../../assets/images/category-img3.png';
import {ReactComponent as House} from '../../../../assets/icons/house.svg';

export const CategoryCard = ({title}) => {
  return (
    <Card>
        <Card.ImgWrapper>
            <Card.Img src={categoryImg} alt="card img"/>
        </Card.ImgWrapper>
        <Card.Overliy>
          <House/>
          <Card.Title>{title}</Card.Title>   
        </Card.Overliy>
    </Card>
  )
}


export default CategoryCard;
