import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppBar from "./App_bar";

const Playroom = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`);
        setQuestions(response.data.results);
      } catch (error) {
        console.log("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, [category]);

  return (
    <div>
        <AppBar/>
      <h2>Playroom for Category: {category}</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
};

export default Playroom;
