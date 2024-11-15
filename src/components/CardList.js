import React, { useContext } from 'react';
import styled from 'styled-components';
import CategoriesCard from './cards/CategoriesCard';
import AppBar from './App_bar';
import { Link } from 'react-router-dom';
import { CategoryProvider } from '../context/FetchData';

const Container = styled.div`
  height: calc(100vh - 64px);
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap:56px;
  padding: 48px 64px;

  @media(max-width: 480px) {
    padding: 48px 12px;
    grid-template-columns: 1fr;
  }

  @media(min-width: 481px) and (max-width: 1024px) {
    padding: 48px 32px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardList = () => {
  const { categories } = useContext(CategoryProvider);

  return (
    <div>
      <AppBar />
      <Container>
        {categories.map((category, idx) => (
          <Link
            key={idx}
            to={`/Trivia-App/playroom/${category.id}`}
            style={{ textDecoration: 'none', color: '#4B4376',  fontSize:'22px', fontWeight:'bold'}}
          >
            <CategoriesCard text={category.name} img={category.image}/>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default CardList;
