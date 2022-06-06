import React, {useState} from 'react'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { Filter } from '../Filter';
import Footer from '../Footer';
import { Button } from '../Generic/Button';
import { Card } from '../Generic/Card';
import { Container, ItemsWrapper, Loading, PropertiesDiscription, PropertiesTitle } from './style';


export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env; 
  const [data, setData] = useState([]);
  const [activeBtn, setActiveBtn] = useState(true);
  // const [title, setTitle] = useState('Properties');
  
  const {search} = useLocation();

  useQuery(['getHouses', search], ()=> {return fetch(`${url}/v1/houses/list${search || '?'}`).then((res)=> res.json())}, {
    onSuccess: (res)=> {
      setData(res?.data || []);
    }
  })

  const setActive = () => {
    setActiveBtn(!activeBtn);
  }
  return (
    <Container>
      <Filter/>
      <PropertiesTitle className='section-title text-center'>Properties</PropertiesTitle>
      <PropertiesDiscription className='section-discription text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</PropertiesDiscription>
      <ItemsWrapper>
        {data.length > 0 ? data.slice(0, activeBtn ? data.length/2 : data.length).map((item) => 
          <Card key={item.id} info={item}/>
        )
          : <Loading className='loading'>
              <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </Loading>
        }
      </ItemsWrapper>
      <Button type="primary" width={250} mAuto="auto" onClick={setActive} none={ activeBtn || 'none'}>Show more</Button>
      <Footer/>
    </Container>
  )
}

export default Properties;