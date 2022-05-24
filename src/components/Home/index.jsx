import React from 'react'
import { Container, MainSection } from './style';
import { Filter } from '../Filter';


export const Home = () => {
  return (
    <Container>
      <Filter/>
      <MainSection>
      </MainSection>
    </Container>
  )
}

export default Home;
