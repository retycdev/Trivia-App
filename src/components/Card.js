import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
max-width:640px;
width:100%;
height:196px;
border-radius:8px;
cursor:pointer;
`
const Image=styled.img`
height:100%;
width:100%;
object-fit:cover;
border-radius:inherit;
`
const Card = ({img
    
}) => {
  return (
    <div>
        <Container>
            <Image src={img}/>
        </Container>
      
    </div>
  )
}

export default Card
