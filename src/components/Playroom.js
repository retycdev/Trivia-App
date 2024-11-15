import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AppBar from "./App_bar";
import styled from "styled-components";
import QuizCard from "./cards/QuizCard";
import ScoreNTimer from "./ScoreNTimer";
import sounds from "../assets/sounds/sounds";
import { ScoreContext } from "../context/Score";

const Container = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  padding: 48px 64px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 480px) {
    padding: 48px 12px;
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    padding: 48px 32px;
  }
`;
const ReplayBtn=styled.button`
height:40px;
border:1px solid #4B4376;
background:#4B4376;
outline:none;
cursor:pointer;
color:White;
border-radius:20px;
padding:0 24px;
`
const decodeHTML = (html) => {
  const text = document.createElement("textarea");
  text.innerHTML = html;
  return text.value;
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Playroom = () => {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`
        );
        const fetchedQuestions = response.data.results.map((q) => ({
          ...q,
          answers: shuffleArray([
            ...q.incorrect_answers.map((ans) => decodeHTML(ans)),
            decodeHTML(q.correct_answer),
          ]),
        }));
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.log("Error fetching questions: ", error);
      }
    };

    if (categoryId) {
      fetchQuestions();
    }

    // Initialize background music and play on mount or refresh
    const backgroundMusic = new Audio(sounds.background);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.125;
    backgroundMusic.play();

    // Cleanup function to stop and reset music on component unmount
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    };
  }, [categoryId]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // useEffect(() => {
  //   if (currentQuestionIndex >= questions.length) {
  //     setScore(0);
  //   }
  // }, [currentQuestionIndex, questions.length, setScore]);

  return (
    <div>
      <AppBar  />
      <Container>
        <ScoreNTimer />
        {questions.length > 0 && currentQuestionIndex < questions.length ? (
          <QuizCard
            quiz={decodeHTML(questions[currentQuestionIndex].question)}
            ans={questions[currentQuestionIndex].answers} // Use pre-shuffled answers
            correct={decodeHTML(questions[currentQuestionIndex].correct_answer)}
            onAnswerSelected={handleNextQuestion}
          />
        ) : (
          <div>
            <p>Congratulations! You've completed the quiz.</p>
            <p>Your score is {score}</p>
            <ReplayBtn
              onClick={() => {
                setScore(0); // Reset the score
                setCurrentQuestionIndex(0); // Reset to the first question
                navigate(`/Trivia-App/playroom/${categoryId}`, {
                  replace: true,
                }); // Reload the component
               
              }}
            >
              Replay
            </ReplayBtn>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Playroom;
