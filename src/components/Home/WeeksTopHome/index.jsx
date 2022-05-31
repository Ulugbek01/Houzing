import React from 'react'
import { Button } from '../../Generic/Button';
import { TopHomeWrapper } from './style';
import topHome from "../../../assets/images/popular-home-img.jpg";

export const WeeksTopHome = () => {
  return (
        <TopHomeWrapper>
            <TopHomeWrapper.Img>
                <img src={topHome} alt="home-img" width='100%'/>
            </TopHomeWrapper.Img>
            <TopHomeWrapper.Overliy>
                <TopHomeWrapper.Title>
                    Vermont Farmhouse With Antique Jail Is
                    the Week's Most Popular Home
                </TopHomeWrapper.Title>
                <Button mAuto="auto" type="primary" width={180}>Read more</Button>
            </TopHomeWrapper.Overliy>
        </TopHomeWrapper>
  )
}

export default WeeksTopHome;