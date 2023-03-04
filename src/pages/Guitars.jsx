import React from "react";
import { useLocation } from "react-router-dom";
import Filter from "../components/Filter";

function Guitars() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "guitar-shop/acoustic" ? (
        <div>
          <h1 className="text-4xl text-center mt-6">Acoustic Guitars</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl text-center mt-6">Electric Guitars</h1>
        </div>
      )}
      <Filter />
    </div>
  );
}

export default Guitars;
