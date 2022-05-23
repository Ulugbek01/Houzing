import React from 'react'
import { Container } from './style'

export const Button = ({
    children,
    onClick,
    height,
    width,
    type,
    mt,
    mr,
    mb,
    ml,
}) => {
  return (
    <Container
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
    >
        {children}
    </Container>
  )
}
