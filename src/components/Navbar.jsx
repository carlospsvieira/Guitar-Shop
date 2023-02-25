import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { CgProfile } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";

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
    <nav>
      <div className="flex justify-around items-center bg-black text-white py-4 w-full">
        <Link to="/" className="text-2xl mr-5 flex">
          <FaGuitar size={25} /> <span className="ml-2">Guitar Shop</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/acoustic" className="login-btn text-lg">
            Acoustic
          </Link>
          <Link to="/electric" className="login-btn text-lg">
            Electric
          </Link>

          {location.pathname === "/login" ? (
            // Checks whether user is at the login page or not.
            // if so, user cannot see links to login or profile pages //
            ""
          ) : user && user.email.length > 0 ? (
            // Checks if user is loggedin and display links //
            <Link to="/profile">
              <CgProfile size={25} />
            </Link>
          ) : (
            <Link to="/login" className="login-btn text-md">
              Login
            </Link>
          )}

          <Link to="/cart">
            <RiShoppingCartLine size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
