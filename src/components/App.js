import React from "react";
import CardList from "./CardList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playroom from "./Playroom";


const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Trivia-App/" element={<CardList/>} />
          <Route path="/Trivia-App/cardlist" element={<CardList/>} />
          <Route path="/Trivia-App/playroom/:categoryId" element={<Playroom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
