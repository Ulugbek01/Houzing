import React from 'react'
import { Container, Wrapper } from './style'

export const Input = ({
  children,
  width,
  height,
  mt,
  mr,
  mb,
  ml,
  type,
  onChange,
  placeholder,
}
) => {
  return (
    <Wrapper>
      <Container 
      placeholder={placeholder}
      width={width}
      height={height}
      type={type}
      onChange={onChange}
       />
    </Wrapper>
  )
}
