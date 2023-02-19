import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { CgProfile } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri"
import { FaGuitar } from "react-icons/fa"

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
    <div className="flex justify-around items-center bg-black text-white py-4 w-full">
      <Link to="/" className="text-2xl mr-5 flex">
        <FaGuitar size={15}/> Guitar Shop
      </Link>

      <div className="flex items-center gap-8">
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
          <Link to="/login">
            Login
          </Link>
        )}

        <Link to="/cart"><RiShoppingCartLine size={25}/></Link>
      </div>
    </div>
  );
}

export default Navbar;
