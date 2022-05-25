import React from 'react'
import { Container } from './style';
import { Filter } from '../Filter';
// import { Button } from '../Generic/Button';
import { Carousel } from 'antd';
import mainImage from "../../assets/images/home-img.jpg";

const contentStyle = {
  minHeight: '570px',
  color: '#fff',
  textAlign: 'center',
};

export const Home = () => {
  return (
    <Container>
      <Filter/>
        <Carousel autoplay>
          {/* <MainSection>
            <MainSection.Overflow>
              <MainSection.Title>Skyper Pool Partment</MainSection.Title>
              <MainSection.Discription className="section-discription">112 Glenwood Ave Hyde Park, Boston, MA</MainSection.Discription>
              <Button width={180}>Read more</Button>
            </MainSection.Overflow>
          </MainSection> */}
        <div>
          <div style={contentStyle}>
            <img src={mainImage} alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={mainImage} alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={mainImage} alt="" />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={mainImage} alt=""/>
          </div>
        </div>
        </Carousel>
    </Container>
  )
}

export default Home;
