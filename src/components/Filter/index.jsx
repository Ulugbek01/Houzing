import React from 'react'
import { Button } from '../Generic/Button'
import { Input } from '../Generic/Input'
import { Container, FilterIcon, SearchIcon } from './style'

export const Filter = () => {
  return (
    <Container>
        <Input placeholder="Enter an address, neighborhood, city, or ZIP code"/>
        <Button type='secondary' width='131'><FilterIcon/> Advanced</Button>
        <Button type='primary' width='180'><SearchIcon/> Search</Button>
    </Container>
  )
}
