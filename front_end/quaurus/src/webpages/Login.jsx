import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let redirect = useNavigate();

  console.log(redirect);

  const onSubmit = async (e) => {
    e.preventDefault();
      const response = await axios.post("http://localhost:8080/user/login", {
        username: username,
        password: password,
      });

      console.log("Response received:", response.data);

      if (response.data.authentication === "Username does not exist") {
        console.log("Username does not exist");
        alert("Username does not exist");
      } else if (response.data.authentication === "Login Success") {
        console.log("Login Success received, redirecting...");
        alert("Login Success");
        redirect("/Home");
      } else {
        console.log("Invalid username or password");
        alert("Invalid username or password");
      }
   
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1>Login Form</h1>
          <div>
            <input
              type="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="registerli">
            <p>
              Don't have an account? <a href="/RegistrationForm">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;