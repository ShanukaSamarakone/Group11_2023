import axios from 'axios'//call api from data import.
import "./leaderboard.css";
import { useState, useEffect } from 'react';





const Leaderboard = () => {
  const [users, setUsers] = useState([]);

useEffect(() => {
  axios.get("http://localhost:3000/leaderboard")//Api called from database 
      .then((res) => {
        setUsers(res.data.data.sort((a, b) => b.total_score - a.total_score));//sorting data in descending order.
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
              <span className="name">{user.user_username}</span>
              <span className="score"><b>{user.total_score}</b></span>
            </div>
          ))}
        </div>
        <ul className="user-list">
          {users.slice(3).map((user, index) => ( 
            <li key={index + 3}> 
              <img src="assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Profile Picture" />
              <span className="rank"><strong>{index+4}.</strong></span>
              <span className="name">{user.user_username}</span>
              <span className="score"><b>{user.total_score}</b></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
