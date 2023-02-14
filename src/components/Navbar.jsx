import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";

function Navbar() {
  const { user, setUser } = useContext(Context);
  const location = useLocation();

  const getUserInStorage = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  };

  useEffect(() => {
    getUserInStorage();
  }, []);

  return (
    <div>
      <Link to="/" className="text-2xl mr-5">
        Guitar Shop
      </Link>

      {location.pathname === "/login" ? (
        // Checks whether user is at the login page or not.
        // if so, user cannot see links to login or profile pages //
        ""
      ) : user && user.email.length > 0 ? (
        // Checks if user is loggedin and display links //
        <Link to="/profile" className="m-3">
          Profile
        </Link>
      ) : (
        <Link to="/login" className="m-3">
          Login
        </Link>
      )}

      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
