import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:64px;
display:flex;
align-items:flex-end;
padding:0 16px;
color:white;
background-color:black;
font-size:24px;

`

const AppBar = () => {
  return (
    <div>
        <Container><p>QuizWhiz.</p></Container>
    
    </div>
  )
}

export default AppBar
