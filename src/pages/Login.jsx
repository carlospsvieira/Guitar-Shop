import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";

function Login() {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/cart");
  };

  return (
    <>
      <input
        type="email"
        name="email"
        className="border-2 border-black mr-4"
        onChange={(e) => setUser({email: e.target.value})}
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;
