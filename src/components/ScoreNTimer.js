import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScoreContext } from '../context/Score';
import { useNavigate} from 'react-router';


const Container = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content:space-around;
  padding: 16px;
  color: #4B4376;
  font-size: 24px;
  border-radius:12px;
`;

const Button=styled.button`
height:40px;
border:1px solid #4B4376;
background:none;
outline:none;
cursor:pointer;
color:#4B4376;
border-radius:20px;
padding:0 24px;
`
const ScoreNTimer = () => {
  const { score, setScore } = useContext(ScoreContext);
  const navigate = useNavigate();

  
  return (
    <Container>
        <p>Score: {score}</p>
        <Button  onClick={() => {
                setScore(0); // Reset the score
                navigate("/Trivia-App/cardlist");

               
              }}>Quit</Button>
    </Container>
  );
};

export default ScoreNTimer;
