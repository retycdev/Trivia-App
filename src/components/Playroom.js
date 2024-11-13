import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppBar from "./App_bar";
import styled from "styled-components";
import QuizCard from "./cards/QuizCard";
import ScoreNTimer from "./ScoreNTimer";
import sounds from "../assets/sounds/sounds";

const Container = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  padding: 48px 64px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;


  @media(max-width:480px){
  padding: 48px 12px;
  }

  @media(min-width:481px) and (max-width:1024px){
  padding: 48px 32px;
  }
`;

// Helper function to decode HTML entities
const decodeHTML = (html) => {
  if (!html) return "";
  return html
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

const Playroom = () => {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=medium&type=multiple`
        );
        setQuestions(response.data.results);
      } catch (error) {
        console.log("Error fetching questions: ", error);
      }
    };

    if (categoryId) {
      fetchQuestions();
    }
    const backgroundMusic= new Audio(sounds.background)
    backgroundMusic.play();
    backgroundMusic.loop=true;
    backgroundMusic.volume = 0.12;
  }, [categoryId]);

  return (
    <div>
      <AppBar />
      
      <Container>
      <ScoreNTimer/>
        <div style={{ display: "flex", gap:"320px",height:'100%' }}>
          {questions.map((question, index) => (
            <QuizCard
              key={index}
              quiz={decodeHTML(question.question)}
              ans={[
                ...question.incorrect_answers.map((answer) =>
                  decodeHTML(answer)
                ),
                decodeHTML(question.correct_answer),
              ]}
              correct={ decodeHTML(question.correct_answer)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Playroom;
