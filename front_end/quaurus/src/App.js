import React from "react";
import Home from "./webpages/Home";
import Flashcard from "./webpages/Flashcard";
import CV from "./webpages/CV";
import Map from "./webpages/Map";
import Leaderboard from "./webpages/Leaderboard";
import Login from "./webpages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Flashcard" element={<Flashcard />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
