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
    mAuto
}) => {
  return (
    <Container
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        mAuto={mAuto}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        className="nocopy"
    >
        {children}
    </Container>
  )
}
