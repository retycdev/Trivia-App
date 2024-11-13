import React, { useState } from "react";
import styled from "styled-components";
import sounds from "../../assets/sounds/sounds";

const Container = styled.div`
  height: 100%;
  min-width: calc(100vw - 128px);
  background: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 480px) {
    min-width: calc(100vw - 24px);
  }
  @media (min-width: 481px) and (max-width: 1024px) {
    min-width: calc(100vw - 64px);
  }
`;

const QuestionText = styled.p`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-bottom: 8px;
`;

const AnswerList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const SelectAnswer = styled.div`
  height: 64px;
  color: white;
  background-color: #563a9c;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6a4ab8;
  }
`;

const QuizCard = ({ quiz, ans, correct }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const successAudio = new Audio(sounds.success);
  successAudio.volume=0.08;
  const failAudio=new Audio(sounds.wrong)
  failAudio.volume=0.04;

  const handleAnswerClick = (answer) => {
    if (selectedAnswer) return; // prevent multiple clicks
    setSelectedAnswer(answer);

    if (answer === correct) {
      successAudio.play();
    }
    else{
      failAudio.play();
    }
  };

  return (
    <Container>
      <QuestionText>{quiz}</QuestionText>
      <AnswerList>
        {ans.map((a, idx) => (
          <SelectAnswer
            key={idx}
            onClick={() => handleAnswerClick(a)}
            style={{
              backgroundColor: selectedAnswer === a ? (a === correct ? "green" : "red") : "",
            }}
          >
            {a}
          </SelectAnswer>
        ))}
      </AnswerList>
    </Container>
  );
};

export default QuizCard;
