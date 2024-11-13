import React from "react";
import AppBar from "./App_bar";
import CardList from "./CardList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playroom from "./Playroom";

const App = () => {
  const categories = [
    { name: "General Knowledge", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr7Pt_0smqCDaTJuO0nBTgPfgvh0DrdwmiA&s" },
    { name: "Politics", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgUXTemOmzEjdw5_qU_pSdXICrkj8dx7i1g&s" },
    { name: "Art", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuII7LQwTKs6s5weGF__GHx6bdJhl7Ntr3sA&s" },
    { name: "History", image: "https://lh4.googleusercontent.com/proxy/3vhpIbg-YZGyCft5u3ZFJhqj0yXFOg4EekZr5ENntNPN1vr11g6BnhnB7H-29sd8aXsImGODMJfnf0QpQEYu6SxjqBhaVKhturGR5_CC7THb8JYy81EuO-57iraygzxaquQxx01UlcvApFMW8Nqz" },
    { name: "Sports", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIpII3c2QrVQDHNiA2fqVFPG_E_dLiZWu3g&s" },
    { name: "Celebrities", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WY6CqoTRx2MESKSi31PXXrbtvQRmLCiADA&s" },
    { name: "Science & Nature", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdTfA_MQNkX4_GJrFNwsYXYEcogwK4czukA&s" }
];

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Trivia-App/" element={<CardList  categories={categories}/>} />
          <Route path="/Trivia-App/cardlist" element={<CardList categories={categories} />} />
          <Route path="/Trivia-App/playroom/:category" element={<Playroom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
