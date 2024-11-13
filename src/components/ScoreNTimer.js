import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const ScoreNTimer = () => {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 20) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
        //reset timer , if timer is less than 1, otherwise subtract  one 
      setTimer((prev) => (prev > 1 ? prev - 1 : Math.floor(Math.random() * 20) + 1));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
        <p>Score: 200</p>
       <p>Timer: {timer}s</p>
    </Container>
  );
};

export default ScoreNTimer;
