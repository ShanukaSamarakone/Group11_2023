import React from "react";
import Home from "./webpages/Home";
import Flashcard from "./webpages/Flashcard";
import CV from "./webpages/CV";
import Map from "./webpages/Map";
import Leaderboard from "./webpages/Leaderboard";
import Login from "./webpages/Login";
import RegistrationForm from "./webpages/RegistrationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import QuizChoice from './quiz-components/QuizChoice'; 
import AQuiz from './quiz-components/quiz1'; 
import SQuiz from './quiz-components/quiz2'; 
import MQuiz from './quiz-components/quiz3'; 
import DQuiz from './quiz-components/quiz4'; 
import PQuiz from './quiz-components/quiz5'; 
import FQuiz from './quiz-components/Equiz1';
import CQuiz from './quiz-components/Equiz2';
import QQuiz from './quiz-components/Equiz3';
import EQuiz from './quiz-components/Equiz4';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Flashcard" element={<Flashcard />} />
          <Route path="/QuizChoice" element={<QuizChoice />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
} 

export default App;
