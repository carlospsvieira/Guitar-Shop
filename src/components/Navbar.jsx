import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { CgProfile, CgMenu, CgClose } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiMusicSpell } from "react-icons/gi";

function Navbar() {
  const { user, setUser, nav, setNav, cart } = useContext(Context);
  const location = useLocation();

  const getUserInStorage = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  };

  // hamburger nav //
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    getUserInStorage();
  }, []);

  return (
    <nav>
      <div className="flex justify-around items-center bg-zinc-800 text-white py-4 w-full">
        {nav ? (
          <div className="flex flex-col w-full h-screen items-center">
            <div className="flex items-center mt-4">
              <Link
                to="/"
                onClick={handleNav}
                className="text-2xl flex items-center mr-[5rem]"
              >
                <GiMusicSpell size={25} />{" "}
                <span className="ml-2">Guitar Shop</span>
              </Link>
              <CgClose onClick={handleNav} className="lg:hidden" size={25} />
            </div>

            <div className="flex flex-col gap-4 text-lg mt-[25%] items-center">
              <Link
                to="/acoustic"
                onClick={handleNav}
                className="login-btn text-lg"
              >
                Acoustic
              </Link>
              <Link
                to="/electric"
                onClick={handleNav}
                className="login-btn text-lg"
              >
                Electric
              </Link>
              <Link
                to="/login"
                onClick={handleNav}
                className="login-btn text-lg"
              >
                Login
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center bg-zinc-800 text-white w-full">
            <Link to="/" className="text-3xl mr-5 flex items-center logo">
              <GiMusicSpell size={25} />{" "}
              <span className="ml-2">Guitar Shop</span>
            </Link>

            <div className="flex items-center gap-8">
              <Link to="/acoustic" className="guitar-link text-lg">
                Acoustic
              </Link>
              <Link to="/electric" className="guitar-link text-lg">
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
                <Link to="/login" className="login-btn text-lg login">
                  Login
                </Link>
              )}

              <Link to="/cart">
                <div className="flex">
                  {cart.length < 1 ? (
                    ""
                  ) : (
                    <span className="absolute pl-7">{cart.length}</span>
                  )}
                  <RiShoppingCartLine size={25} />
                </div>
              </Link>
              <CgMenu onClick={handleNav} className="lg:hidden" size={25} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
