import React from 'react'
import { Container, MainCategory } from './style';

export const Category = () => {
  return (
    <MainCategory>
        <Container>
            <MainCategory.Title className="text-center">Category</MainCategory.Title>
            <MainCategory.Text className="text-center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</MainCategory.Text>
        </Container>
    </MainCategory>
  )
}

export default Category;