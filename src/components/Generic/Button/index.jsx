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
    mAuto,
    mlAuto,
    none
}) => {
  return (
    <Container
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
        mAuto={mAuto}
        mlAuto = {mlAuto}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
        className="nocopy"
        dNone = {none}
    >
        {children}
    </Container>
  )
}
