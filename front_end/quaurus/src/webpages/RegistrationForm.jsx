import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/addUser", user);
    navigate("/");
  };

  return (
    <div>
      <section>
        <br />
        <br />
        <br />
        <div className="registration-form">
          <h1> Registration Form</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default RegistrationForm;