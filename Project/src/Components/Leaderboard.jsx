import axios from 'axios'
import "./leaderboard.css";
import { useState, useEffect } from 'react';


// const userss = [
//   { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "John Doe", score: 5000 },
//   { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "Jane Smith", score: 4500 },
//   { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "Alice Johnson", score: 4000 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Bob Brown", score: 3500 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
//   { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },

// ];



const Leaderboard = () => {
  const [users, setUsers] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3000/leaderboard")
      .then((res) => {
        setUsers(res.data.data.sort((a, b) => b.score - a.score));
        console.log("res",res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

  return (
    <div className='bbody'>
      <h1 className="centered">Leaderboard</h1>
      <div className="leaderboard">
        <div className="top3">
          {users.slice(0, 3).map((user, index) => ( 
            <div className="user" key={index}>
              <img src="assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg" alt="Profile Picture" />
              <span className="Top-rank"><strong>{index+1}.</strong>  </span>
              <span className="name">{user.Name}</span>
              <span className="score">{user.score}</span>
            </div>
          ))}
        </div>
        <ul className="user-list">
          {users.slice(3).map((user, index) => ( 
            <li key={index + 3}> 
              <img src="assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Profile Picture" />
              <span className="rank"><strong>{index+4}.</strong></span>
              <span className="name">{user.Name}</span>
              <span className="score">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
