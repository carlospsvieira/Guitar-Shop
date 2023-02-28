import React from "react";
import { useLocation } from "react-router-dom";
import GuitarList from "../components/GuitarList";

function Guitars() {
  const location = useLocation();
  return (
    <div className="h-screen pt-[5%]">
      {location.pathname === "/acoustic" ? (
        <div>
          <h1 className="text-2xl">Acoustic Guitars</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl">Electric Guitars</h1>
        </div>
      )}
      <GuitarList />
    </div>
  );
}

export default Guitars;
