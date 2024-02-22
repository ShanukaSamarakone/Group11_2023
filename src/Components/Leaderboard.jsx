import "./leaderboard.css";


const users = [
  { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "John Doe", score: 5000 },
  { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "Jane Smith", score: 4500 },
  { imgSrc: "./src/assets/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg", name: "Alice Johnson", score: 4000 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Bob Brown", score: 3500 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },
  { imgSrc: "./src/assets/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg", name: "Emily Davis", score: 3200 },

];

const Leaderboard = () => {
  return (
    <div className='bbody'>
      <h1 className="centered">Leaderboard</h1>
      <div className="leaderboard">
        <div className="top3">
          {users.slice(0, 3).map((user, index) => ( 
            <div className="user" key={index}>
              <img src={user.imgSrc} alt="Profile Picture" />
              <span className="name">{user.name}</span>
              <span className="score">{user.score}</span>
            </div>
          ))}
        </div>
        <ul className="user-list">
          {users.slice(3).map((user, index) => ( 
            <li key={index + 3}> 
              <img src={user.imgSrc} alt="Profile Picture" />
              <span className="name">{user.name}</span>
              <span className="score">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
