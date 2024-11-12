import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:calc(100vh - 64px);
overflow-y:auto;
padding:48px 64px;

@media(max-width:480px){
padding:48px 12px;
}

@media(min-width:481px) and (max-width:1024px){
padding:48px 32px;

}
`


const CardList = ({content}) => {
  return (
    <div>
      <Container>{content}</Container>
    </div>
  )
}

export default CardList
