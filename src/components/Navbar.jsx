import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/" className="text-2xl mr-5">
        Guitar Shop
      </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
