import React from 'react'
import styled from 'styled-components'
import images from '../assets/images'
import Card from './Card'

const Container=styled.div`
height:calc(100vh - 64px);
overflow-y:auto;
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:12px;
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


const CardList = () => {
  return (
    <div>
      <Container>
        {images.map((img,idx)=>{
            return<Card key={idx} img={img.src}/>
        })}
      </Container>
    </div>
  )
}

export default CardList
