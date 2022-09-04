import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>
        <label>
          Username
          <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
