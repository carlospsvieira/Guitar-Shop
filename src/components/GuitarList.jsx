import React from "react";
import { Link, useLocation } from "react-router-dom";
import { guitars } from "../data";

function GuitarList() {
  const location = useLocation();
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.substring(1)
  );
  console.log(guitarList);

  return (
    <div className="m-2">
      <div className="flex flex-wrap justify-center">
        {guitarList.map((guitar) => (
          <div key={guitar.id} className="flex items-center">
            <img src={guitar.image} alt="" className="w-[200px]"/>
          </div>
        ))}
      </div>
      { location.pathname === '/acoustic' ? (
        <Link to="/electric" className="bg-red-400 rounded-md px-2 py-1">See our electric guitars</Link>
      ) : (
        <Link to="/acoustic" className="bg-sky-500 rounded-md px-2 py-1">See our acoustic guitars</Link>
      )}
    </div>
  );
}

export default GuitarList;
