import React from 'react'
import { useQuery } from 'react-query';
import { Filter } from '../Filter';
import { Container, ItemsWrapper } from './style';


export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env; 

  useQuery(
    ['getHomeList'],
    () => {
      return fetch(`${url}/v1/houses/list`).then((res)=>res.json() )
    },
    {
      onSuccess: (res) => {
        console.log(res, 'res');
      }, 
    }
  );
 
  return (
    <Container>
      <Filter/>
      <h2 className='section-title text-center'>Properties</h2>
      <p className='section-discription text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <ItemsWrapper>

      </ItemsWrapper>
    </Container>
  )
}

export default Properties;