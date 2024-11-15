import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
max-width:640px;
width:100%;
height:256px;
border-radius:8px;
cursor:pointer;
margin-bottom:8px;
@media(max-width:768px){
height:196px;}

&:hover{
opacity:0.5;
}

`
const Image=styled.img`
height:100%;
width:100%;
object-fit:cover;
border-radius:inherit;
`
const CategoriesCard = ({img,text

}) => {
  return (
    <div>
        <Container>
            <Image src={img}/>
            <p>{text}</p>
        </Container>
      
    </div>
  )
}

export default CategoriesCard
