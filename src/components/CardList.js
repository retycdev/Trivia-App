import React from 'react'
import styled from 'styled-components'
import images from '../assets/images'
import Card from './Card'
import AppBar from './App_bar'
import { Link } from 'react-router-dom'

const Container=styled.div`
height:calc(100vh - 64px);
overflow-y:auto;
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:32px;
padding:48px 64px;

@media(max-width:480px){
padding:48px 12px;
grid-template-columns:1fr;
}

@media(min-width:481px) and (max-width:1024px){
padding:48px 32px;
grid-template-columns:repeat(2,1fr);

}
`


const CardList = ({categories}) => {
  return (
    <div>
      <AppBar/>
      <Container>
        {categories.map((category,idx)=>{
            return<Link  key={idx} to={`/Trivia-App/playroom/${category.name}`} style={{textDecoration:"none",color:"black"}}>
              <Card text={category.name} img={category.image}/>
            </Link>
        })}
      </Container>
    </div>
  )
}

export default CardList
