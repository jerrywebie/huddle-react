import React from 'react';
import Card from './Card';
import { Container } from './styles/Container.styled';

export default function CardList({data}) {
  return (
   <Container>
     {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
   </Container>
  )
}
