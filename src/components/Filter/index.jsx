import { Popover } from 'antd'
import React from 'react'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Advanced, Container, FilterIcon, SearchIcon, Section } from './style'

export const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Body>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder="Country"/>
        <Input placeholder="Region"/>
        <Input placeholder="City"/>
        <Input placeholder="Zip code"/>
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input placeholder="Rooms"/>
        <Input placeholder="Size"/>
        <Input placeholder="Sort"/>
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder="Min price"/>
        <Input placeholder="Max price"/>
      </Section>
      </Advanced.Body>
    
      <Advanced.Footer>
        <Button type="secondary" width={128} mr={20}>Cancel</Button>
        <Button type="primary" width={128}>Submit</Button>
      </Advanced.Footer>
    </Advanced>
  )
  return (
    <Container>
        <Input placeholder="Enter an address, neighborhood, city, or ZIP code"/>
        <Popover placement='bottomRight' content={advancedSearch} trigger="click">
          <Button type='secondary' width='131' mr={20} ml={20}><FilterIcon/> Advanced</Button>
        </Popover>
        <Button type='primary' width='180'><SearchIcon/> Search</Button>
    </Container>
  )
}
