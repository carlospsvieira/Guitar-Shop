import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";

function Login() {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState("");
  const validPassword = password.length < Number("6");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-[50vh]">
      <input
        type="email"
        name="email"
        className="border-2 border-black"
        onChange={(e) => setUser({ email: e.target.value })}
      />
      <span className="text-sm">email: adm@guitar-shop.com</span>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-black"
      />
      <span className="text-sm">password: 1234567</span>
      <button
        onClick={handleClick}
        disabled={validPassword}
        className="px-2 py-1"
      >
        Login
      </button>
      <div>
        <span className="text-sm">
          Not a member yet? <Link to="/register">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
