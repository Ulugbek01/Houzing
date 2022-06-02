import React, {useState} from 'react'
import { useQuery } from 'react-query';
import { Filter } from '../Filter';
import { Card } from '../Generic/Card';
import { Container, ItemsWrapper } from './style';

const { REACT_APP_BASE_URL: url } = process.env; 

export const Properties = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useQuery([''], ()=> {return fetch(`${url}/v1/houses/list`).then((res)=> res.json())}, {
    onSuccess: (res)=> {
      setData(res?.data || []);
    }
  })
  return (
    <Container>
      <Filter/>
      <h2 className='section-title text-center'>Properties</h2>
      <p className='section-discription text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      <ItemsWrapper>
        {data.length ?  data.map((item) => 
          <Card key={item.id} width={380} info={item}/>
        )
          : <div className='text-center'>No Data Found</div>
        }
      </ItemsWrapper>
    </Container>
  )
}

export default Properties;