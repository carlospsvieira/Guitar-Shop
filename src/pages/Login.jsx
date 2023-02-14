import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";

function Login() {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState("");
  const validPassword = password.length < Number("6");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <>
      <input
        type="email"
        name="email"
        className="border-2 border-black mr-4"
        onChange={(e) => setUser({ email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-black"
      />
      <button
        onClick={handleClick}
        disabled={validPassword}
        className="px-2 py-1"
      >
        Login
      </button>
    </>
  );
}

export default Login;
