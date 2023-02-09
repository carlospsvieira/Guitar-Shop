import React from "react";
import { useLocation } from "react-router-dom";
import GuitarsList from "../components/GuitarsList";

function Guitars() {
  const location = useLocation();
  return (
    <div>
      { location.pathname === "/acoustic" ? (
        <h1 className="text-2xl">Acoustic Guitars</h1>
      ) : (
        <h1 className="text-2xl">Electric Guitars</h1>
      )}
      <GuitarsList />
    </div>
  );
}

export default Guitars;
