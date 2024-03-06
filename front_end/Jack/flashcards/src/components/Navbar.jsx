import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div id="menu" className="fas fa-bars"></div>
        <a href="#" className="logo">
          <i className="fas fa-user-graduate"></i>Quaurus
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Flashcard">Learn</a>
            </li>
            <li>
              <a href="/front_end/Salah/Quiz Choice.html">Quiz</a>
            </li>
            <li>
              <a href="/front_end/Shanuka/shanuka-div.html">CV</a>
            </li>
            <li>
              <a href="/front_end/Isam/map.html">Map</a>
            </li>
            <li>
              <a href="/front_end/Sumaiya/leaderboard.html">Leaderboard</a>
            </li>
          </ul>
        </nav>

        <a href="/front_end/Areeni/Updated login page.html">
          <div id="login" className="fas fa-user-circle"></div>
        </a>
      </header>
    </div>
  );
}

export default Navbar;
