import React from 'react'
import { Popover, Select } from 'antd'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import UseReplace from '../../hooks/useReplace'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Advanced, Container, FilterIcon, SearchIcon, Section } from './style'

export const Filter = () => {
  const {REACT_APP_BASE_URL: url} = process.env;
  const {Option} = Select;
const navigate = useNavigate();

  const onChange = ({target}) => {
    const {name, value} = target;
    navigate(UseReplace(name, value))
  }

  const {data} = useQuery(
    'getHouses', 
    ()=> {return fetch(`${url}/v1/categories/list`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json())}, 
    {
      onSuccess: (res) => console.log(res)
    }
  );

  const onSelect = (id)=> {
    navigate(`/properties/${UseReplace('category_id', id)}`)
  }

  const advancedSearch = (
    <Advanced>
      <Advanced.Body>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input onChange={(e)=> onChange(e)} name="country" placeholder="Country"/>
        <Input onChange={(e)=> onChange(e)} name="region" placeholder="Region"/>
        <Input onChange={(e)=> onChange(e)} name="city" placeholder="City"/>
        <Input onChange={(e)=> onChange(e)} name="zip_code" placeholder="Zip code"/>
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input onChange={(e)=> onChange(e)} name="room" placeholder="Rooms"/>
        <Input onChange={(e)=> onChange(e)} name="size" placeholder="Size"/>
        <Input onChange={(e)=> onChange(e)} name="sort" placeholder="Sort"/>
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input onChange={(e)=> onChange(e)} name="min_price" placeholder="Min price"/>
        <Input onChange={(e)=> onChange(e)} name="max_price" placeholder="Max price"/>
        <Select name="" id="" defaultValue='Test value' onChange={onSelect} size="large">
          {data?.data?.map((value) => 
            <Option value={value.id} >{value?.name}</Option>
          )}
        </Select>
      </Section>
      </Advanced.Body>
    
      <Advanced.Footer>
        {/* <Button type="secondary" width={128} mr={20} mAuto='auto'>Cancel</Button> */}
        <Button type="primary" width={128}>Submit</Button>
      </Advanced.Footer>
    </Advanced>
  )
  return (
    <Container>
        <Input isIcon={true} placeholder="Enter an address, neighborhood, city, or ZIP code"/>
        <Popover placement='bottomRight' content={advancedSearch} trigger="click">
          <Button type='secondary' width='131' mr={20} ml={20}><FilterIcon/> Advanced</Button>
        </Popover>
        <Button type='primary' width='180'><SearchIcon/> Search</Button>
    </Container>
  )
}
