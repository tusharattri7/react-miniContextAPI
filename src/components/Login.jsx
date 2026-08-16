import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPasword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    // prevent page from refreshing
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Enter Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPasword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
