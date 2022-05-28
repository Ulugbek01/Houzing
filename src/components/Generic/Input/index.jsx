import React from 'react'
import { Container, HomeIcon, Wrapper } from './style'

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
  isIcon
}
) => {
  return (
    <Wrapper>
      {isIcon && <HomeIcon/>}
      <Container 
      placeholder={placeholder}
      width={width}
      height={height}
      type={type}
      pl={isIcon}
      onChange={onChange}
       />
    </Wrapper>
  )
}
