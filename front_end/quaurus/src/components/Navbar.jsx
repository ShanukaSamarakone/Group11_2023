import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div id="menu" className="fas fa-bars"></div>
        <a href="#" className="logo">
          <img src="assets/images/owl.png" alt="" />Quaurus
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
              <a href="/CV">CV</a>
            </li>
            <li>
              <a href="/Map">Map</a>
            </li>
            <li>
              <a href="/Leaderboard">Leaderboard</a>
            </li>
          </ul>
        </nav>

        <a href="/Login">
          <div id="login" className="fas fa-user-circle"></div>
        </a>
      </header>
    </div>
  );
}

export default Navbar;
