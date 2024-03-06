import React from "react";
import Home from "./webpages/Home";
import Flashcard from "./webpages/Flashcard";
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
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
